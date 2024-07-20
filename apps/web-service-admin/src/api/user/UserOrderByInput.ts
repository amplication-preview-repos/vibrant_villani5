import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isActive?: SortOrder;
  userType?: SortOrder;
  pwd?: SortOrder;
  uid?: SortOrder;
};
