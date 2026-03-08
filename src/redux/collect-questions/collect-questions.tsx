import { createSlice } from '@reduxjs/toolkit';

const collectQuestionsSlice = createSlice({
  name: 'collectQuestions',
  initialState: {
    value: []
  },
  reducers: {
    collect: (state, action) => {
       
        const questions: [] = action.payload;
        const updateQuestions = questions.map(({val})=>{
            
            return val;
        })
        
        state.value = action.payload;
    }
    
  }
})

export const collectQuestionsActions = collectQuestionsSlice.actions;

export default collectQuestionsSlice;