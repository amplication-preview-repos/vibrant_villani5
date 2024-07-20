import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAffiliateClickServiceBase } from "./base/userAffiliateClick.service.base";

@Injectable()
export class UserAffiliateClickService extends UserAffiliateClickServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
