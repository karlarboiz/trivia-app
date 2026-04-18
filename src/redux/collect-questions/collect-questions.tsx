import { createSlice } from '@reduxjs/toolkit';
import bcrypt from "bcryptjs-react";
import type { QuizItemsModel } from '../../pages/QuizPageMC/quizpageMC-model';

const collectQuestionsSlice = createSlice({
  name: 'collectQuestions',
  initialState: {
    value: []
  },
  reducers: {
    collect: (state, action) => {
        const salt = 10;

        const questions: QuizItemsModel[] = action.payload;

        const updateQuestions = questions.map((val: QuizItemsModel) => {
          val.completeChoices = [...val.incorrectAnswers, val.correctAnswer].sort();
          val.incorrectAnswers = [];
          val.correctAnswer = bcrypt.hashSync(val.correctAnswer, salt);
          val.isAnswered =false;
          val.isCorrectAnswer= false;
          return val;
        });
                

        localStorage.setItem("quizItems",JSON.stringify(updateQuestions));
        
        state.value = action.payload;
    },
    resetCollection: (state) => {
      state.value = [];
    }
  }
})

export const collectQuestionsActions = collectQuestionsSlice.actions;

export default collectQuestionsSlice;