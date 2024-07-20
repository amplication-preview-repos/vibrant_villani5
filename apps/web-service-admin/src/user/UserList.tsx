import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="created_at" />
        <DateField source="updatedAt" label="updated At" />
        <TextField label="is_active" source="isActive" />
        <TextField label="user_type" source="userType" />
        <TextField label="pwd" source="pwd" />
        <TextField label="uid" source="uid" />
      </Datagrid>
    </List>
  );
};
