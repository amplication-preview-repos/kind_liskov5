import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADRESS_TITLE_FIELD } from "../adress/AdressTitle";
import { BUILDINGPROJECT_TITLE_FIELD } from "../buildingProject/BuildingProjectTitle";

export const ConstructionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Adress" source="adress.id" reference="Adress">
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
      </SimpleShowLayout>
    </Show>
  );
};
