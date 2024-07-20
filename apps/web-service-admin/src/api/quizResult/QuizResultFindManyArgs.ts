import { QuizResultWhereInput } from "./QuizResultWhereInput";
import { QuizResultOrderByInput } from "./QuizResultOrderByInput";

export type QuizResultFindManyArgs = {
  where?: QuizResultWhereInput;
  orderBy?: Array<QuizResultOrderByInput>;
  skip?: number;
  take?: number;
};
