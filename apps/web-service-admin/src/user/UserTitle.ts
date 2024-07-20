import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "pwd";

export const UserTitle = (record: TUser): string => {
  return record.pwd?.toString() || String(record.id);
};
