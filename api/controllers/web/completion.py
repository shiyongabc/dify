import base64
import json
import logging
import time

from flask_restful import reqparse  # type: ignore
from werkzeug.exceptions import InternalServerError, NotFound

import services
from controllers.web import api
from controllers.web.error import (
    AppUnavailableError,
    CompletionRequestError,
    ConversationCompletedError,
    NotChatAppError,
    NotCompletionAppError,
    ProviderModelCurrentlyNotSupportError,
    ProviderNotInitializeError,
    ProviderQuotaExceededError,
)
from controllers.web.error import InvokeRateLimitError as InvokeRateLimitHttpError
from controllers.web.wraps import WebApiResource
from core.app.apps.base_app_queue_manager import AppQueueManager
from core.app.entities.app_invoke_entities import InvokeFrom
from core.errors.error import (
    ModelCurrentlyNotSupportError,
    ProviderTokenNotInitError,
    QuotaExceededError,
)
from core.model_runtime.errors.invoke import InvokeError
from libs import helper
from libs.helper import uuid_value
from models.model import AppMode
from services.app_generate_service import AppGenerateService
from services.errors.llm import InvokeRateLimitError


# define completion api for user
class CompletionApi(WebApiResource):
    def post(self, app_model, end_user):
        if app_model.mode != "completion":
            raise NotCompletionAppError()

        parser = reqparse.RequestParser()
        parser.add_argument("Cookie", type=str, location="headers")
        parser.add_argument("inputs", type=dict, required=True, location="json")
        parser.add_argument("query", type=str, location="json", default="")
        parser.add_argument("files", type=list, required=False, location="json")
        parser.add_argument("response_mode", type=str, choices=["blocking", "streaming"], location="json")
        parser.add_argument("retriever_from", type=str, required=False, default="web_app", location="json")

        args = parser.parse_args()
        #获取cookie 如果有值 则取出cookie的Authorization值 并jwt解析  获取 org_class scope client_id user_id用于权限处理
        cookie_header = args.get("Cookie", "")
        input_json = args["inputs"]
        logging.info("inputJson=",input_json)
        input_json=obtain_init_sys_params_from_cookie(cookie_header,input_json)
        args["inputs"] = input_json
        streaming = args["response_mode"] == "streaming"
        args["auto_generate_name"] = False

        try:
            response = AppGenerateService.generate(
                app_model=app_model, user=end_user, args=args, invoke_from=InvokeFrom.WEB_APP, streaming=streaming
            )

            return helper.compact_generate_response(response)
        except services.errors.conversation.ConversationNotExistsError:
            raise NotFound("Conversation Not Exists.")
        except services.errors.conversation.ConversationCompletedError:
            raise ConversationCompletedError()
        except services.errors.app_model_config.AppModelConfigBrokenError:
            logging.exception("App model config broken.")
            raise AppUnavailableError()
        except ProviderTokenNotInitError as ex:
            raise ProviderNotInitializeError(ex.description)
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except InvokeError as e:
            raise CompletionRequestError(e.description)
        except ValueError as e:
            raise e
        except Exception as e:
            logging.exception("internal server error.")
            raise InternalServerError()


class CompletionStopApi(WebApiResource):
    def post(self, app_model, end_user, task_id):
        if app_model.mode != "completion":
            raise NotCompletionAppError()

        AppQueueManager.set_stop_flag(task_id, InvokeFrom.WEB_APP, end_user.id)

        return {"result": "success"}, 200


class ChatApi(WebApiResource):
    def post(self, app_model, end_user):
        app_mode = AppMode.value_of(app_model.mode)
        if app_mode not in {AppMode.CHAT, AppMode.AGENT_CHAT, AppMode.ADVANCED_CHAT}:
            raise NotChatAppError()

        parser = reqparse.RequestParser()
        parser.add_argument("Cookie", type=str, location="headers")
        parser.add_argument("inputs", type=dict, required=True, location="json")
        parser.add_argument("query", type=str, required=True, location="json")
        parser.add_argument("files", type=list, required=False, location="json")
        parser.add_argument("response_mode", type=str, choices=["blocking", "streaming"], location="json")
        parser.add_argument("conversation_id", type=uuid_value, location="json")
        parser.add_argument("parent_message_id", type=uuid_value, required=False, location="json")
        parser.add_argument("retriever_from", type=str, required=False, default="web_app", location="json")

        args = parser.parse_args()

        #获取cookie 如果有值 则取出cookie的Authorization值 并jwt解析  获取 org_class scope client_id user_id用于权限处理
        cookie_header = args.get("Cookie", "")
        input_json = args["inputs"]
        logging.info("inputJson=",input_json)
        input_json=obtain_init_sys_params_from_cookie(cookie_header,input_json)
        logging.info("inputJsonFinal=",input_json)
        args["inputs"]=input_json
        streaming = args["response_mode"] == "streaming"
        args["auto_generate_name"] = False

        try:
            response = AppGenerateService.generate(
                app_model=app_model, user=end_user, args=args, invoke_from=InvokeFrom.WEB_APP, streaming=streaming
            )

            return helper.compact_generate_response(response)
        except services.errors.conversation.ConversationNotExistsError:
            raise NotFound("Conversation Not Exists.")
        except services.errors.conversation.ConversationCompletedError:
            raise ConversationCompletedError()
        except services.errors.app_model_config.AppModelConfigBrokenError:
            logging.exception("App model config broken.")
            raise AppUnavailableError()
        except ProviderTokenNotInitError as ex:
            raise ProviderNotInitializeError(ex.description)
        except QuotaExceededError:
            raise ProviderQuotaExceededError()
        except ModelCurrentlyNotSupportError:
            raise ProviderModelCurrentlyNotSupportError()
        except InvokeRateLimitError as ex:
            raise InvokeRateLimitHttpError(ex.description)
        except InvokeError as e:
            raise CompletionRequestError(e.description)
        except ValueError as e:
            raise e
        except Exception as e:
            logging.exception("internal server error.")
            raise InternalServerError()

def swap_json_from_jwt(jwt_str):
    # 拆分 JWT 的三部分
    header_encoded, payload_encoded, signature_encoded = jwt_str.split(".")
    # 解码头部
    def decode_base64url(data):
        # Base64Url 解码并补全缺失的等号
        padding = '=' * (4 - (len(data) % 4))
        return base64.urlsafe_b64decode(data + padding)

    header_json = decode_base64url(header_encoded).decode("utf-8")
    header = json.loads(header_json)
    logging.info("Header:", header)
    # 解码载荷
    payload_json = decode_base64url(payload_encoded).decode("utf-8")
    payload = json.loads(payload_json)
    logging.info("authorizatioJson:",payload)
    return payload
def obtain_init_sys_params_from_cookie(cookie_header,input_json):
    if cookie_header:
        for cookie in cookie_header.split(";"):
            parts = cookie.strip().split("=", 1)
            if len(parts) == 2:
                key, value = parts[0], parts[1]
                if key == "Authorization":
                    # 拆分 Token 并解码 Payload
                    authorization_value=value.replace("bearer%20","").replace("bearer ","")
                    authorization_json=swap_json_from_jwt(authorization_value)
                    #判断有效期是否到期 取字段：exp:1746762125
                    exp=authorization_json["exp"]
                    timestamp = int(time.time())
                    logging.info("exp=",exp)
                    logging.info(",currenttime=" , timestamp)
                    if timestamp<=exp:
                        #print("authorizationJson-org_class=%s"%authorizationJson["clientOrgClass"])
                        input_json["sys.org_class"] = authorization_json["clientOrgClass"]
                        input_json["sys.user_id"] = authorization_json["userId"]
                        input_json["sys.client_id"] = authorization_json["client_id"]
                        #scopes转化为字符串用|隔开
                        input_json["sys.scopes"] = "|".join(authorization_json["scope"])+"|"

    return input_json

class ChatStopApi(WebApiResource):
    def post(self, app_model, end_user, task_id):
        app_mode = AppMode.value_of(app_model.mode)
        if app_mode not in {AppMode.CHAT, AppMode.AGENT_CHAT, AppMode.ADVANCED_CHAT}:
            raise NotChatAppError()

        AppQueueManager.set_stop_flag(task_id, InvokeFrom.WEB_APP, end_user.id)

        return {"result": "success"}, 200


api.add_resource(CompletionApi, "/completion-messages")
api.add_resource(CompletionStopApi, "/completion-messages/<string:task_id>/stop")
api.add_resource(ChatApi, "/chat-messages")
api.add_resource(ChatStopApi, "/chat-messages/<string:task_id>/stop")
