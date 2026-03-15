import { createSlice } from "@reduxjs/toolkit";

const settingsCollectionSlice = createSlice({
  name: 'settingCollection',
  initialState: {
    items: 0,
    topics: [],
    difficulty:'',
    timer: 0
  },
  reducers: {
    collectSettings: (state,action) => {
      state.items = action.payload.items;
      state.topics = action.payload.topics;
      state.difficulty=  action.payload.difficulty;
      state.difficulty = action.payload.timer
    }
  }
})

export const settingsCollectionActions = settingsCollectionSlice.actions;

export default settingsCollectionSlice;