import { Module } from "@nestjs/common";
import { UserCertificateModuleBase } from "./base/userCertificate.module.base";
import { UserCertificateService } from "./userCertificate.service";
import { UserCertificateController } from "./userCertificate.controller";
import { UserCertificateResolver } from "./userCertificate.resolver";

@Module({
  imports: [UserCertificateModuleBase],
  controllers: [UserCertificateController],
  providers: [UserCertificateService, UserCertificateResolver],
  exports: [UserCertificateService],
})
export class UserCertificateModule {}
