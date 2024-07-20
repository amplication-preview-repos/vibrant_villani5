import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProfileWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  uid?: StringNullableFilter;
};
