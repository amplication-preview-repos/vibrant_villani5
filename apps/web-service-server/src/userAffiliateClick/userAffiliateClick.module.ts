import { Module } from "@nestjs/common";
import { UserAffiliateClickModuleBase } from "./base/userAffiliateClick.module.base";
import { UserAffiliateClickService } from "./userAffiliateClick.service";
import { UserAffiliateClickController } from "./userAffiliateClick.controller";
import { UserAffiliateClickResolver } from "./userAffiliateClick.resolver";

@Module({
  imports: [UserAffiliateClickModuleBase],
  controllers: [UserAffiliateClickController],
  providers: [UserAffiliateClickService, UserAffiliateClickResolver],
  exports: [UserAffiliateClickService],
})
export class UserAffiliateClickModule {}
