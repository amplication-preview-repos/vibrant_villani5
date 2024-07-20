import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
