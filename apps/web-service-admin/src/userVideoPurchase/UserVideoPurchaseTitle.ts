import { UserVideoPurchase as TUserVideoPurchase } from "../api/userVideoPurchase/UserVideoPurchase";

export const USERVIDEOPURCHASE_TITLE_FIELD = "id";

export const UserVideoPurchaseTitle = (record: TUserVideoPurchase): string => {
  return record.id?.toString() || String(record.id);
};
