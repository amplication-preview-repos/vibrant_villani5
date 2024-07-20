import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscountCodeService } from "./discountCode.service";
import { DiscountCodeControllerBase } from "./base/discountCode.controller.base";

@swagger.ApiTags("discountCodes")
@common.Controller("discountCodes")
export class DiscountCodeController extends DiscountCodeControllerBase {
  constructor(protected readonly service: DiscountCodeService) {
    super(service);
  }
}
