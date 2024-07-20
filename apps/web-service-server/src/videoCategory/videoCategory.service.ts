import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoCategoryServiceBase } from "./base/videoCategory.service.base";

@Injectable()
export class VideoCategoryService extends VideoCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
