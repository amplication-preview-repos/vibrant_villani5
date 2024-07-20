import * as graphql from "@nestjs/graphql";
import { UserVideoPurchaseResolverBase } from "./base/userVideoPurchase.resolver.base";
import { UserVideoPurchase } from "./base/UserVideoPurchase";
import { UserVideoPurchaseService } from "./userVideoPurchase.service";

@graphql.Resolver(() => UserVideoPurchase)
export class UserVideoPurchaseResolver extends UserVideoPurchaseResolverBase {
  constructor(protected readonly service: UserVideoPurchaseService) {
    super(service);
  }
}
