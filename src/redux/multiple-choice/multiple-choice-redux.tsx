import { createSlice } from '@reduxjs/toolkit';

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
    }
  }
})

export const multipleChoiceActions = multipleChoiceSlice.actions;

export default multipleChoiceSlice;