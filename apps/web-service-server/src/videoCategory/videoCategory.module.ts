import { Module } from "@nestjs/common";
import { VideoCategoryModuleBase } from "./base/videoCategory.module.base";
import { VideoCategoryService } from "./videoCategory.service";
import { VideoCategoryController } from "./videoCategory.controller";
import { VideoCategoryResolver } from "./videoCategory.resolver";

@Module({
  imports: [VideoCategoryModuleBase],
  controllers: [VideoCategoryController],
  providers: [VideoCategoryService, VideoCategoryResolver],
  exports: [VideoCategoryService],
})
export class VideoCategoryModule {}
