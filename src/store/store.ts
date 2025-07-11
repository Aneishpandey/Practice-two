// 🏪 REDUX STORE SETUP
// Think of Redux store as a central warehouse where we keep all our app's data
// that needs to be shared between different components

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

// configureStore is like setting up our warehouse with different sections
export const store = configureStore({
  reducer: {
    // Each key here represents a "section" in our warehouse
    // 'counter' section will be managed by counterReducer
    counter: counterReducer,
  },
})

// These types help TypeScript understand what our store looks like
// Think of them as labels that tell us what's inside our warehouse
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch