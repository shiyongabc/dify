from enum import StrEnum


class SystemVariableKey(StrEnum):
    """
    System Variables.
    """

    QUERY = "query"
    FILES = "files"
    CONVERSATION_ID = "conversation_id"
    USER_ID = "user_id"
    DIALOGUE_COUNT = "dialogue_count"
    APP_ID = "app_id"
    WORKFLOW_ID = "workflow_id"
    WORKFLOW_RUN_ID = "workflow_run_id"
    ORG_CLASS = "org_class"
    SCOPES = "scopes"
    CLIENT_ID = "client_id"
    WORKFLOW_EXECUTION_ID = "workflow_run_id"
