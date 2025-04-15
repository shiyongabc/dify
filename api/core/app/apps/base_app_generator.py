import json
import logging
from collections.abc import Generator, Mapping, Sequence
from typing import TYPE_CHECKING, Any, Optional, Union

import click

from core.app.app_config.entities import VariableEntityType
from core.file import File, FileUploadConfig
from factories import file_factory

if TYPE_CHECKING:
    from core.app.app_config.entities import VariableEntity


class BaseAppGenerator:
    def _prepare_user_inputs(
        self,
        *,
        user_inputs: Optional[Mapping[str, Any]],
        variables: Sequence["VariableEntity"],
        tenant_id: str,
    ) -> Mapping[str, Any]:
        user_inputs = user_inputs or {}
        # Filter input variables from form configuration, handle required fields, default values, and option values
        logging.info(click.style("variables: {}".format(variables), fg="green"))
        #向Sequence加元素variables org_class scopes client_id

        org_class=VariableEntity()

        org_class.variable="sys.org_class"
        org_class.label = "sys.org_class"
        org_class.max_length = "48"
        org_class.required = False
        org_class.type=VariableEntityType(VariableEntityType.TEXT_INPUT)
        variables.__new__(org_class)
        scopes=VariableEntity()
        scopes.variable="sys.scopes"
        scopes.label = "sys.scopes"
        scopes.max_length = "48"
        scopes.required= False
        scopes.type = VariableEntityType(VariableEntityType.TEXT_INPUT)
        variables.__new__(scopes)
        client_id=VariableEntity()
        client_id.variable="sys.client_id"
        client_id.label = "sys.client_id"
        client_id,max_length = "48"
        client_id.required = False
        client_id.type = VariableEntityType(VariableEntityType.TEXT_INPUT)
        variables.__new__(client_id)
        logging.info(click.style("variables_add_default: {}".format(variables), fg="green"))
        user_inputs = {
            var.variable: self._validate_inputs(value=user_inputs.get(var.variable), variable_entity=var)
            for var in variables
        }
        logging.info(click.style("user_inputs_prepare: {}".format(user_inputs), fg="green"))
        user_inputs = {k: self._sanitize_value(v) for k, v in user_inputs.items()}
        # Convert files in inputs to File
        entity_dictionary = {item.variable: item for item in variables}
        # Convert single file to File
        files_inputs = {
            k: file_factory.build_from_mapping(
                mapping=v,
                tenant_id=tenant_id,
                config=FileUploadConfig(
                    allowed_file_types=entity_dictionary[k].allowed_file_types,
                    allowed_file_extensions=entity_dictionary[k].allowed_file_extensions,
                    allowed_file_upload_methods=entity_dictionary[k].allowed_file_upload_methods,
                ),
            )
            for k, v in user_inputs.items()
            if isinstance(v, dict) and entity_dictionary[k].type == VariableEntityType.FILE
        }
        # Convert list of files to File
        file_list_inputs = {
            k: file_factory.build_from_mappings(
                mappings=v,
                tenant_id=tenant_id,
                config=FileUploadConfig(
                    allowed_file_types=entity_dictionary[k].allowed_file_types,
                    allowed_file_extensions=entity_dictionary[k].allowed_file_extensions,
                    allowed_file_upload_methods=entity_dictionary[k].allowed_file_upload_methods,
                ),
            )
            for k, v in user_inputs.items()
            if isinstance(v, list)
            # Ensure skip List<File>
            and all(isinstance(item, dict) for item in v)
            and entity_dictionary[k].type == VariableEntityType.FILE_LIST
        }
        # Merge all inputs
        user_inputs = {**user_inputs, **files_inputs, **file_list_inputs}

        # Check if all files are converted to File
        if any(filter(lambda v: isinstance(v, dict), user_inputs.values())):
            raise ValueError("Invalid input type")
        if any(
            filter(lambda v: isinstance(v, dict), filter(lambda item: isinstance(item, list), user_inputs.values()))
        ):
            raise ValueError("Invalid input type")

        return user_inputs

    def _validate_inputs(
        self,
        *,
        variable_entity: "VariableEntity",
        value: Any,
    ):
        if value is None:
            if variable_entity.required:
                raise ValueError(f"{variable_entity.variable} is required in input form")
            return value

        if variable_entity.type in {
            VariableEntityType.TEXT_INPUT,
            VariableEntityType.SELECT,
            VariableEntityType.PARAGRAPH,
        } and not isinstance(value, str):
            raise ValueError(
                f"(type '{variable_entity.type}') {variable_entity.variable} in input form must be a string"
            )

        if variable_entity.type == VariableEntityType.NUMBER and isinstance(value, str):
            # handle empty string case
            if not value.strip():
                return None
            # may raise ValueError if user_input_value is not a valid number
            try:
                if "." in value:
                    return float(value)
                else:
                    return int(value)
            except ValueError:
                raise ValueError(f"{variable_entity.variable} in input form must be a valid number")

        match variable_entity.type:
            case VariableEntityType.SELECT:
                if value not in variable_entity.options:
                    raise ValueError(
                        f"{variable_entity.variable} in input form must be one of the following: "
                        f"{variable_entity.options}"
                    )
            case VariableEntityType.TEXT_INPUT | VariableEntityType.PARAGRAPH:
                if variable_entity.max_length and len(value) > variable_entity.max_length:
                    raise ValueError(
                        f"{variable_entity.variable} in input form must be less than {variable_entity.max_length} "
                        "characters"
                    )
            case VariableEntityType.FILE:
                if not isinstance(value, dict) and not isinstance(value, File):
                    raise ValueError(f"{variable_entity.variable} in input form must be a file")
            case VariableEntityType.FILE_LIST:
                # if number of files exceeds the limit, raise ValueError
                if not (
                    isinstance(value, list)
                    and (all(isinstance(item, dict) for item in value) or all(isinstance(item, File) for item in value))
                ):
                    raise ValueError(f"{variable_entity.variable} in input form must be a list of files")

                if variable_entity.max_length and len(value) > variable_entity.max_length:
                    raise ValueError(
                        f"{variable_entity.variable} in input form must be less than {variable_entity.max_length} files"
                    )

        return value

    def _sanitize_value(self, value: Any) -> Any:
        if isinstance(value, str):
            return value.replace("\x00", "")
        return value

    @classmethod
    def convert_to_event_stream(cls, generator: Union[Mapping, Generator[Mapping | str, None, None]]):
        """
        Convert messages into event stream
        """
        if isinstance(generator, dict):
            return generator
        else:

            def gen():
                for message in generator:
                    if isinstance(message, Mapping | dict):
                        yield f"data: {json.dumps(message)}\n\n"
                    else:
                        yield f"event: {message}\n\n"

            return gen()
