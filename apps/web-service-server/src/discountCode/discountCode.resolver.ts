import * as graphql from "@nestjs/graphql";
import { DiscountCodeResolverBase } from "./base/discountCode.resolver.base";
import { DiscountCode } from "./base/DiscountCode";
import { DiscountCodeService } from "./discountCode.service";

@graphql.Resolver(() => DiscountCode)
export class DiscountCodeResolver extends DiscountCodeResolverBase {
  constructor(protected readonly service: DiscountCodeService) {
    super(service);
  }
}
