import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CertificateService } from "./certificate.service";
import { CertificateControllerBase } from "./base/certificate.controller.base";

@swagger.ApiTags("certificates")
@common.Controller("certificates")
export class CertificateController extends CertificateControllerBase {
  constructor(protected readonly service: CertificateService) {
    super(service);
  }
}
