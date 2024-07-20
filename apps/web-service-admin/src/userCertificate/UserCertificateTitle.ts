import { UserCertificate as TUserCertificate } from "../api/userCertificate/UserCertificate";

export const USERCERTIFICATE_TITLE_FIELD = "id";

export const UserCertificateTitle = (record: TUserCertificate): string => {
  return record.id?.toString() || String(record.id);
};
