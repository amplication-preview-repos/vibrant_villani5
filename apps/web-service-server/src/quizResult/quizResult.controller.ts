import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuizResultService } from "./quizResult.service";
import { QuizResultControllerBase } from "./base/quizResult.controller.base";

@swagger.ApiTags("quizResults")
@common.Controller("quizResults")
export class QuizResultController extends QuizResultControllerBase {
  constructor(protected readonly service: QuizResultService) {
    super(service);
  }
}
