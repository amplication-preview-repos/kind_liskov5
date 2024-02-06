import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AdressTitle } from "../adress/AdressTitle";
import { ConstructionTitle } from "../construction/ConstructionTitle";

export const BuildingProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="adress.id" reference="Adress" label="Adress">
          <SelectInput optionText={AdressTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="construction"
          reference="Construction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConstructionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
