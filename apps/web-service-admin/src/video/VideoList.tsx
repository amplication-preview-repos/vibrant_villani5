import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Videos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="created At" />
        <DateField source="updatedAt" label="updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="keywords" source="keywords" />
        <TextField label="file_url" source="fileUrl" />
        <TextField label="price" source="price" />
        <TextField label="max_views" source="maxViews" />
        <BooleanField label="is_free" source="isFree" />
        <TextField label="category" source="category" />
      </Datagrid>
    </List>
  );
};
