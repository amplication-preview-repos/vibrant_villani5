import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoCategoryService } from "./videoCategory.service";
import { VideoCategoryControllerBase } from "./base/videoCategory.controller.base";

@swagger.ApiTags("videoCategories")
@common.Controller("videoCategories")
export class VideoCategoryController extends VideoCategoryControllerBase {
  constructor(protected readonly service: VideoCategoryService) {
    super(service);
  }
}
