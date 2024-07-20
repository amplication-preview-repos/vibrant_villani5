import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoBundleService } from "./videoBundle.service";
import { VideoBundleControllerBase } from "./base/videoBundle.controller.base";

@swagger.ApiTags("videoBundles")
@common.Controller("videoBundles")
export class VideoBundleController extends VideoBundleControllerBase {
  constructor(protected readonly service: VideoBundleService) {
    super(service);
  }
}
