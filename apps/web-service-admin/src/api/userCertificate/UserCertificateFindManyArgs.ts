import { UserCertificateWhereInput } from "./UserCertificateWhereInput";
import { UserCertificateOrderByInput } from "./UserCertificateOrderByInput";

export type UserCertificateFindManyArgs = {
  where?: UserCertificateWhereInput;
  orderBy?: Array<UserCertificateOrderByInput>;
  skip?: number;
  take?: number;
};
