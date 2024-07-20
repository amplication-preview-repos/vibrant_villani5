import * as graphql from "@nestjs/graphql";
import { UserAffiliateClickResolverBase } from "./base/userAffiliateClick.resolver.base";
import { UserAffiliateClick } from "./base/UserAffiliateClick";
import { UserAffiliateClickService } from "./userAffiliateClick.service";

@graphql.Resolver(() => UserAffiliateClick)
export class UserAffiliateClickResolver extends UserAffiliateClickResolverBase {
  constructor(protected readonly service: UserAffiliateClickService) {
    super(service);
  }
}
