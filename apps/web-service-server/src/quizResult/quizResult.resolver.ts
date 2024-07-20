import * as graphql from "@nestjs/graphql";
import { QuizResultResolverBase } from "./base/quizResult.resolver.base";
import { QuizResult } from "./base/QuizResult";
import { QuizResultService } from "./quizResult.service";

@graphql.Resolver(() => QuizResult)
export class QuizResultResolver extends QuizResultResolverBase {
  constructor(protected readonly service: QuizResultService) {
    super(service);
  }
}
