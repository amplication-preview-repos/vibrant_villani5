import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type VideoWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  keywords?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  price?: FloatNullableFilter;
  maxViews?: IntNullableFilter;
  isFree?: BooleanNullableFilter;
  category?: StringNullableFilter;
};
