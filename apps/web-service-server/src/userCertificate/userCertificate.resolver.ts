import * as graphql from "@nestjs/graphql";
import { UserCertificateResolverBase } from "./base/userCertificate.resolver.base";
import { UserCertificate } from "./base/UserCertificate";
import { UserCertificateService } from "./userCertificate.service";

@graphql.Resolver(() => UserCertificate)
export class UserCertificateResolver extends UserCertificateResolverBase {
  constructor(protected readonly service: UserCertificateService) {
    super(service);
  }
}
