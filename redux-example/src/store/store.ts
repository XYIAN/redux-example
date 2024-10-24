import { configureStore } from '@reduxjs/toolkit'
import haitReducer from './habit-slice'

const store = configureStore({
    reducer: {
        habits:haitReducer
    }
})
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export default store; 