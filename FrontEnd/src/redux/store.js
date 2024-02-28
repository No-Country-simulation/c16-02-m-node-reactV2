import { configureStore } from "@reduxjs/toolkit"
import eventReducer from './features/eventSlice'


export const store = configureStore({
    reducer: {
        event: eventReducer
    }
})