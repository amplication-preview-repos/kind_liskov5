import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdressTitle } from "../adress/AdressTitle";
import { BuildingProjectTitle } from "../buildingProject/BuildingProjectTitle";

export const ConstructionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
