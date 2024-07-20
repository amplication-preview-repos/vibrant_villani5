import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  keywords?: SortOrder;
  fileUrl?: SortOrder;
  price?: SortOrder;
  maxViews?: SortOrder;
  isFree?: SortOrder;
  category?: SortOrder;
};
