import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserVideoPurchaseServiceBase } from "./base/userVideoPurchase.service.base";

@Injectable()
export class UserVideoPurchaseService extends UserVideoPurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
