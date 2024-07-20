import * as graphql from "@nestjs/graphql";
import { VideoBundleResolverBase } from "./base/videoBundle.resolver.base";
import { VideoBundle } from "./base/VideoBundle";
import { VideoBundleService } from "./videoBundle.service";

@graphql.Resolver(() => VideoBundle)
export class VideoBundleResolver extends VideoBundleResolverBase {
  constructor(protected readonly service: VideoBundleService) {
    super(service);
  }
}
