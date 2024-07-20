import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  isActive?: number | null;
  userType?: InputJsonValue;
  pwd?: string | null;
  uid?: string | null;
};
