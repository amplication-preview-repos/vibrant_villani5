import { Module } from "@nestjs/common";
import { QuizResultModuleBase } from "./base/quizResult.module.base";
import { QuizResultService } from "./quizResult.service";
import { QuizResultController } from "./quizResult.controller";
import { QuizResultResolver } from "./quizResult.resolver";

@Module({
  imports: [QuizResultModuleBase],
  controllers: [QuizResultController],
  providers: [QuizResultService, QuizResultResolver],
  exports: [QuizResultService],
})
export class QuizResultModule {}
