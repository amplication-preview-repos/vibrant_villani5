import { Module } from "@nestjs/common";
import { UserVideoPurchaseModuleBase } from "./base/userVideoPurchase.module.base";
import { UserVideoPurchaseService } from "./userVideoPurchase.service";
import { UserVideoPurchaseController } from "./userVideoPurchase.controller";
import { UserVideoPurchaseResolver } from "./userVideoPurchase.resolver";

@Module({
  imports: [UserVideoPurchaseModuleBase],
  controllers: [UserVideoPurchaseController],
  providers: [UserVideoPurchaseService, UserVideoPurchaseResolver],
  exports: [UserVideoPurchaseService],
})
export class UserVideoPurchaseModule {}
