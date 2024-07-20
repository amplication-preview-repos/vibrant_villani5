import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="is_active" source="isActive" />
        <SelectArrayInput
          source="userType"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="pwd" source="pwd" />
        <TextInput label="uid" source="uid" />
      </SimpleForm>
    </Create>
  );
};
