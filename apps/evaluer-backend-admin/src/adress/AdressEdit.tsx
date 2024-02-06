import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BuildingProjectTitle } from "../buildingProject/BuildingProjectTitle";
import { ConstructionTitle } from "../construction/ConstructionTitle";

export const AdressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="buildingProjects"
          reference="BuildingProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BuildingProjectTitle} />
        </ReferenceArrayInput>
        <TextInput label="City" source="city" />
        <ReferenceArrayInput
          source="constructions"
          reference="Construction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConstructionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Country" source="country" />
        <TextInput label="Postcode" source="postcode" />
        <TextInput label="State" source="state" />
        <TextInput label="Streetname" source="streetname" />
      </SimpleForm>
    </Edit>
  );
};
