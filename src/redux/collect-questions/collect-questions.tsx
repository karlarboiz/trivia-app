import { createSlice } from '@reduxjs/toolkit';

const collectQuestionsSlice = createSlice({
  name: 'collectQuestions',
  initialState: {
    value: []
  },
  reducers: {
    collect: state => {
        console.log(state);
    }
    
  }
})

export const collectQuestionsActions = collectQuestionsSlice.actions;

export default collectQuestionsSlice;