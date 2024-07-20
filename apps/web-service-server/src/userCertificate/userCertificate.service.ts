import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCertificateServiceBase } from "./base/userCertificate.service.base";

@Injectable()
export class UserCertificateService extends UserCertificateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
