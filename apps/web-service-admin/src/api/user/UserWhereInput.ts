import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  isActive?: IntNullableFilter;
  pwd?: StringNullableFilter;
  uid?: StringNullableFilter;
};
