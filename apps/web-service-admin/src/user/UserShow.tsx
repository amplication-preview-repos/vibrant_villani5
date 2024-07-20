import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="created_at" />
        <DateField source="updatedAt" label="updated At" />
        <TextField label="is_active" source="isActive" />
        <TextField label="user_type" source="userType" />
        <TextField label="pwd" source="pwd" />
        <TextField label="uid" source="uid" />
      </SimpleShowLayout>
    </Show>
  );
};
