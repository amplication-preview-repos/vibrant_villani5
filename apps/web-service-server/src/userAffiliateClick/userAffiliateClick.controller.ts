import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAffiliateClickService } from "./userAffiliateClick.service";
import { UserAffiliateClickControllerBase } from "./base/userAffiliateClick.controller.base";

@swagger.ApiTags("userAffiliateClicks")
@common.Controller("userAffiliateClicks")
export class UserAffiliateClickController extends UserAffiliateClickControllerBase {
  constructor(protected readonly service: UserAffiliateClickService) {
    super(service);
  }
}
