import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADRESS_TITLE_FIELD } from "./AdressTitle";
import { BUILDINGPROJECT_TITLE_FIELD } from "../buildingProject/BuildingProjectTitle";

export const AdressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="State" source="state" />
        <TextField label="Streetname" source="streetname" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BuildingProject"
          target="adressId"
          label="Building projects"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Adress"
              source="adress.id"
              reference="Adress"
            >
              <TextField source={ADRESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Construction"
          target="adressId"
          label="Constructions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Adress"
              source="adress.id"
              reference="Adress"
            >
              <TextField source={ADRESS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Building projects"
              source="buildingproject.id"
              reference="BuildingProject"
            >
              <TextField source={BUILDINGPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
