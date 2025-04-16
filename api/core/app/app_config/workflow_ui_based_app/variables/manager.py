import logging

import click

from core.app.app_config.entities import VariableEntity, VariableEntityType
from models.workflow import Workflow


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
                variable="sys.org_class",
                description="",
                label="sys.org_class",
                required=False,
                max_length=48,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="sys.client_id",
                description="",
                label="sys.client_id",
                required=False,
                max_length=60,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="sys.scopes",
                description="",
                label="sys.scopes",
                required=False,
                max_length=256,
                options=[],
            )
        )
        variables.append(
            VariableEntity(
                type=VariableEntityType.TEXT_INPUT,
                variable="sys.user_id",
                description="",
                label="sys.user_id",
                required=False,
                max_length=60,
                options=[],
            )
        )
        logging.info(click.style("variable_entities: {}".format(variables), fg="green"))
        return variables
