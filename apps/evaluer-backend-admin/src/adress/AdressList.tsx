import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Adresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="State" source="state" />
        <TextField label="Streetname" source="streetname" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
