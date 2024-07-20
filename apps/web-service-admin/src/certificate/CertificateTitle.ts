import { Certificate as TCertificate } from "../api/certificate/Certificate";

export const CERTIFICATE_TITLE_FIELD = "id";

export const CertificateTitle = (record: TCertificate): string => {
  return record.id?.toString() || String(record.id);
};
