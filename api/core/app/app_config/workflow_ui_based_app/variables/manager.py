from core.app.app_config.entities import VariableEntity
from models.workflow import Workflow
from core.app.app_config.entities import  VariableEntity, VariableEntityType
import logging
import click
class WorkflowVariablesConfigManager:
    @classmethod
    def convert(cls, workflow: Workflow) -> list[VariableEntity]:
        """
        Convert workflow start variables to variables

        :param workflow: workflow instance
        """
        variables = []

        # find start node
        user_input_form = workflow.user_input_form()

        # variables
        for variable in user_input_form:
            variables.append(VariableEntity.model_validate(variable))
        #添加默认参数
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="org_class",
                description="",
                label="org_class",
                required=False,
                max_length=48,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="client_id",
                description="",
                label="client_id",
                required=False,
                max_length=60,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="scopes",
                description="",
                label="scopes",
                required=False,
                max_length=256,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="user_id",
                description="",
                label="user_id",
                required=False,
                max_length=60,
                options=[],
            )
        )
        logging.info(click.style("variable_entities: {}".format(variables), fg="green"))
        return variables
