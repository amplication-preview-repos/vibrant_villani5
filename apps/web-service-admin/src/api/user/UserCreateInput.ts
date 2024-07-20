import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  isActive?: number | null;
  userType?: InputJsonValue;
  pwd?: string | null;
  uid?: string | null;
};
