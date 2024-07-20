import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuizResultServiceBase } from "./base/quizResult.service.base";

@Injectable()
export class QuizResultService extends QuizResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
