import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
