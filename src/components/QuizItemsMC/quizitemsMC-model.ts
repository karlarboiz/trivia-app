import type { QuizItemsModel } from "../../pages/QuizPageMC/quizpageMC-model";
export type QuizItemsMCModel = {
  incrementValue: number;
  quizItems: QuizItemsModel[];
  isInGame: boolean;
};