import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoBundleServiceBase } from "./base/videoBundle.service.base";

@Injectable()
export class VideoBundleService extends VideoBundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
