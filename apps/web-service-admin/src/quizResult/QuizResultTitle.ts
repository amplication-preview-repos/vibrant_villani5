import { QuizResult as TQuizResult } from "../api/quizResult/QuizResult";

export const QUIZRESULT_TITLE_FIELD = "id";

export const QuizResultTitle = (record: TQuizResult): string => {
  return record.id?.toString() || String(record.id);
};
