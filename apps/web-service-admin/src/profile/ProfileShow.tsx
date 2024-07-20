import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
