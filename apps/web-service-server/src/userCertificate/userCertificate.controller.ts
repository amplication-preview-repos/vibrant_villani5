import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserCertificateService } from "./userCertificate.service";
import { UserCertificateControllerBase } from "./base/userCertificate.controller.base";

@swagger.ApiTags("userCertificates")
@common.Controller("userCertificates")
export class UserCertificateController extends UserCertificateControllerBase {
  constructor(protected readonly service: UserCertificateService) {
    super(service);
  }
}
