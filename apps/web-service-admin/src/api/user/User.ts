import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: number | null;
  userType: JsonValue;
  pwd: string | null;
  uid: string | null;
};
