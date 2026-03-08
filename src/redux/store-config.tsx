import { configureStore } from "@reduxjs/toolkit"

import multipleChoiceSlice from "./multiple-choice/multiple-choice-redux"

export const store = configureStore({
    reducer: {
        multipleChoiceSlice: multipleChoiceSlice.reducer
    }
})