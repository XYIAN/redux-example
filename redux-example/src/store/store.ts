import { configureStore } from '@reduxjs/toolkit'
import haitReducer from './habit-slice'
export default configureStore({
    reducer: {
      habits:haitReducer
  }
})