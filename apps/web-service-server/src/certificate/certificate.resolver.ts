import * as graphql from "@nestjs/graphql";
import { CertificateResolverBase } from "./base/certificate.resolver.base";
import { Certificate } from "./base/Certificate";
import { CertificateService } from "./certificate.service";

@graphql.Resolver(() => Certificate)
export class CertificateResolver extends CertificateResolverBase {
  constructor(protected readonly service: CertificateService) {
    super(service);
  }
}
