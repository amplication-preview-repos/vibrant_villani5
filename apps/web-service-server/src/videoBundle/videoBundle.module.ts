import { Module } from "@nestjs/common";
import { VideoBundleModuleBase } from "./base/videoBundle.module.base";
import { VideoBundleService } from "./videoBundle.service";
import { VideoBundleController } from "./videoBundle.controller";
import { VideoBundleResolver } from "./videoBundle.resolver";

@Module({
  imports: [VideoBundleModuleBase],
  controllers: [VideoBundleController],
  providers: [VideoBundleService, VideoBundleResolver],
  exports: [VideoBundleService],
})
export class VideoBundleModule {}
