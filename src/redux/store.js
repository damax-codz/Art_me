import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./Logged"

export const store = configureStore({
  reducer: {
      logged : loggedReducer,
  },
})