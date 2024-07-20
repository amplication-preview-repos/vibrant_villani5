import { UserAffiliateClick as TUserAffiliateClick } from "../api/userAffiliateClick/UserAffiliateClick";

export const USERAFFILIATECLICK_TITLE_FIELD = "id";

export const UserAffiliateClickTitle = (
  record: TUserAffiliateClick
): string => {
  return record.id?.toString() || String(record.id);
};
