import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADRESS_TITLE_FIELD } from "../adress/AdressTitle";
import { BUILDINGPROJECT_TITLE_FIELD } from "../buildingProject/BuildingProjectTitle";

export const ConstructionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Constructions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
