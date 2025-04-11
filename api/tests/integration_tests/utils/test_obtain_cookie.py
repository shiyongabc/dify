
import base64
import json
import time


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
                    #print("exp=%s,currenttime=%s"%(exp,timestamp))
                    if timestamp<=exp:
                        #print("authorizationJson-org_class=%s"%authorizationJson["clientOrgClass"])
                        input_json["sys.org_class"] = authorization_json["clientOrgClass"]
                        input_json["sys.user_id"] = authorization_json["userId"]
                        input_json["sys.client_id"] = authorization_json["client_id"]
                        input_json["sys.scopes"] = "|".join(authorization_json["scope"])+"|"

    return input_json

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
    print("Header:", header)

    # 解码载荷
    payload_json = decode_base64url(payload_encoded).decode("utf-8")
    payload = json.loads(payload_json)
    print("authorizatioJson:", payload)
    return payload
def test_lazy_loading_subclass_from_source():
    cookie_header="tt"
    input_json={}
    ij=obtain_init_sys_params_from_cookie(cookie_header,input_json)
    #print("ij=%s"%ij)

def test_jwt():
    token="tt"
    # 拆分 JWT 的三部分
    header_encoded, payload_encoded, signature_encoded = token.split(".")

    # 解码头部
    def decode_base64url(data):
        # Base64Url 解码并补全缺失的等号
        padding = '=' * (4 - (len(data) % 4))
        return base64.urlsafe_b64decode(data + padding)

    header_json = decode_base64url(header_encoded).decode("utf-8")
    header = json.loads(header_json)
    #print("Header:", header)

    # 解码载荷
    payload_json = decode_base64url(payload_encoded).decode("utf-8")
    payload = json.loads(payload_json)
    #print("authorizatioJson:", payload)