import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="address" source="address" />
        <TextInput label="city" source="city" />
        <TextInput label="state" source="state" />
        <TextInput label="zip" source="zip" />
        <TextInput label="phone_number" source="phoneNumber" />
        <TextInput label="uid" source="uid" />
      </SimpleForm>
    </Create>
  );
};
