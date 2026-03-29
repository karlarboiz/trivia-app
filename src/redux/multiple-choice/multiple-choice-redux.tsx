import { createSlice } from '@reduxjs/toolkit';
import type { QuizItemsModel } from '../../pages/QuizPageMC/quizpageMC-model';
const multipleChoiceSlice = createSlice({
  name: 'multipleChoice',
  initialState: {
    value: 0,
    completedItems: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    reset: state=>{
      state.value = 0;
      localStorage.clear();
    },
    checkAnswer: (state,action)=>{
      const quizItems: QuizItemsModel[] =JSON.parse(localStorage.getItem("quizItems") || "[]"); 
      const quizItem: QuizItemsModel = quizItems[state.value];
    
      quizItem.isAnswered = action.payload.answer !== null || action.payload.answer !== undefined 
                            || action.payload.answer !== "";
      
      quizItem.playerAnswer = action.payload.answer;
      quizItem.isCorrectAnswer = action.payload.isCorrectAnswer;
      quizItems[state.value] = quizItem;
      localStorage.setItem("quizItems",JSON.stringify(quizItems));
    },
    consumedTime: (state,action)=>{
       const quizItems: QuizItemsModel[] =JSON.parse(localStorage.getItem("quizItems") || "[]"); 
      const quizItem: QuizItemsModel = quizItems[state.value];
      quizItem.timeConsumed = action.payload.timeLeft;
    }
  }
})

export const multipleChoiceActions = multipleChoiceSlice.actions;

export default multipleChoiceSlice;