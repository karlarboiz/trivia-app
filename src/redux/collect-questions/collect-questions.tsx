import { createSlice } from '@reduxjs/toolkit';
import type { QuizItemsModel } from '../../pages/QuizPageMC/quizpageMC-model';

const collectQuestionsSlice = createSlice({
  name: 'collectQuestions',
  initialState: {
    value: []
  },
  reducers: {
    collect: (state, action) => {
       
        const questions: QuizItemsModel[] = action.payload;
        const updateQuestions = questions.map((val :QuizItemsModel)=>{
          val.completeChoices = [...val.incorrectAnswers,val.correctAnswer].sort();
          return val
        })

        localStorage.setItem("quizItems",JSON.stringify(updateQuestions));
        
        state.value = action.payload;
    }
    
  }
})

export const collectQuestionsActions = collectQuestionsSlice.actions;

export default collectQuestionsSlice;