import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="first_name" source="firstName" />
        <TextField label="last_name" source="lastName" />
        <TextField label="address" source="address" />
        <TextField label="city" source="city" />
        <TextField label="state" source="state" />
        <TextField label="zip" source="zip" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="uid" source="uid" />
      </Datagrid>
    </List>
  );
};
