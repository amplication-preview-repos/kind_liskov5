import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdressTitle } from "../adress/AdressTitle";
import { BuildingProjectTitle } from "../buildingProject/BuildingProjectTitle";

export const ConstructionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="adress.id" reference="Adress" label="Adress">
          <SelectInput optionText={AdressTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="buildingProjects.id"
          reference="BuildingProject"
          label="Building projects"
        >
          <SelectInput optionText={BuildingProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
