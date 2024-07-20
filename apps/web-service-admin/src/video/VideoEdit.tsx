import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="keywords" multiline source="keywords" />
        <TextInput label="file_url" source="fileUrl" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="max_views" source="maxViews" />
        <BooleanInput label="is_free" source="isFree" />
        <TextInput label="category" source="category" />
      </SimpleForm>
    </Edit>
  );
};
