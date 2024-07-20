import * as graphql from "@nestjs/graphql";
import { VideoCategoryResolverBase } from "./base/videoCategory.resolver.base";
import { VideoCategory } from "./base/VideoCategory";
import { VideoCategoryService } from "./videoCategory.service";

@graphql.Resolver(() => VideoCategory)
export class VideoCategoryResolver extends VideoCategoryResolverBase {
  constructor(protected readonly service: VideoCategoryService) {
    super(service);
  }
}
