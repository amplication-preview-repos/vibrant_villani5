import { SortOrder } from "../../util/SortOrder";

export type VideoBundleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  isFree?: SortOrder;
};
