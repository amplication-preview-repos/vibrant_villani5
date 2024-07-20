import { Module } from "@nestjs/common";
import { DiscountCodeModuleBase } from "./base/discountCode.module.base";
import { DiscountCodeService } from "./discountCode.service";
import { DiscountCodeController } from "./discountCode.controller";
import { DiscountCodeResolver } from "./discountCode.resolver";

@Module({
  imports: [DiscountCodeModuleBase],
  controllers: [DiscountCodeController],
  providers: [DiscountCodeService, DiscountCodeResolver],
  exports: [DiscountCodeService],
})
export class DiscountCodeModule {}
