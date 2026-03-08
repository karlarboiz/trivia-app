import { configureStore } from "@reduxjs/toolkit"

import collectQuestionsSlice from "./collect-questions/collect-questions"
import multipleChoiceSlice from "./multiple-choice/multiple-choice-redux"
export const store = configureStore({
    reducer: {
        multipleChoiceSlice: multipleChoiceSlice.reducer,
        collectQuestionsSlice: collectQuestionsSlice.reducer
    }
})

// this creates the type for the whole store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch