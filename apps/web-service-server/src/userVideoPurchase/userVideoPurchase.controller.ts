import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserVideoPurchaseService } from "./userVideoPurchase.service";
import { UserVideoPurchaseControllerBase } from "./base/userVideoPurchase.controller.base";

@swagger.ApiTags("userVideoPurchases")
@common.Controller("userVideoPurchases")
export class UserVideoPurchaseController extends UserVideoPurchaseControllerBase {
  constructor(protected readonly service: UserVideoPurchaseService) {
    super(service);
  }
}
