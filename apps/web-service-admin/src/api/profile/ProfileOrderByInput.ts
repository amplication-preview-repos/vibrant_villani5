import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  address?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  zip?: SortOrder;
  phoneNumber?: SortOrder;
  uid?: SortOrder;
};
