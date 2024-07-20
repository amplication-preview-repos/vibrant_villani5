import { Module } from "@nestjs/common";
import { CertificateModuleBase } from "./base/certificate.module.base";
import { CertificateService } from "./certificate.service";
import { CertificateController } from "./certificate.controller";
import { CertificateResolver } from "./certificate.resolver";

@Module({
  imports: [CertificateModuleBase],
  controllers: [CertificateController],
  providers: [CertificateService, CertificateResolver],
  exports: [CertificateService],
})
export class CertificateModule {}
