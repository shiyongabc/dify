import logging

import click

from core.workflow.constants import SYSTEM_VARIABLE_NODE_ID
from core.workflow.entities.node_entities import NodeRunResult
from core.workflow.entities.workflow_node_execution import WorkflowNodeExecutionStatus
from core.workflow.nodes.base import BaseNode
from core.workflow.nodes.enums import NodeType
from core.workflow.nodes.start.entities import StartNodeData


class StartNode(BaseNode[StartNodeData]):
    _node_data_cls = StartNodeData
    _node_type = NodeType.START

    @classmethod
    def version(cls) -> str:
        return "1"

    def _run(self) -> NodeRunResult:
        node_inputs = dict(self.graph_runtime_state.variable_pool.user_inputs)
        system_inputs = self.graph_runtime_state.variable_pool.system_variables

        # TODO: System variables should be directly accessible, no need for special handling
        # Set system variables as node outputs.
        logging.info(click.style("node_inputs: {}".format(node_inputs), fg="green"))
        logging.info(click.style("system_inputs: {}".format(system_inputs), fg="green"))
        for var in system_inputs:
            node_inputs[SYSTEM_VARIABLE_NODE_ID + "." + var] = system_inputs[var]
        outputs = dict(node_inputs)

        logging.info(click.style("node_inputs: {}".format(node_inputs), fg="green"))

        return NodeRunResult(status=WorkflowNodeExecutionStatus.SUCCEEDED, inputs=node_inputs, outputs=outputs)
