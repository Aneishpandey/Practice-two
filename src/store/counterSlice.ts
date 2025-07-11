// 🔢 COUNTER SLICE - Managing Counter State with Redux
// A "slice" is like a specific section of our warehouse that handles one type of data
// This slice manages everything related to our counter

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Define what our counter state looks like
// It's like describing what we store in this section of our warehouse
interface CounterState {
  value: number        // The current count number
  isLoading: boolean   // Whether we're currently processing something
}

// The initial state is like the default setup when we first open our warehouse
const initialState: CounterState = {
  value: 0,           // Start counting from 0
  isLoading: false,   // Not loading anything initially
}

// createSlice is like creating a specialized worker for our warehouse section
// This worker knows how to handle counter-related tasks
export const counterSlice = createSlice({
  name: 'counter',    // Name of this section
  initialState,       // What it looks like when we start
  reducers: {
    // Reducers are like instructions for our worker
    // Each reducer describes how to change the state
    
    // Increment: Add 1 to the current value
    increment: (state) => {
      // In Redux Toolkit, we can directly modify state (it's actually creating a new state behind the scenes)
      state.value += 1
    },
    
    // Decrement: Subtract 1 from the current value
    decrement: (state) => {
      state.value -= 1
    },
    
    // Add by amount: Add a specific number to the current value
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // action.payload contains the number we want to add
      state.value += action.payload
    },
    
    // Reset: Set counter back to 0
    reset: (state) => {
      state.value = 0
    },
    
    // Set loading state (useful for async operations)
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})

// Export the actions so components can use them
// Think of actions as requests we send to our warehouse worker
export const { increment, decrement, incrementByAmount, reset, setLoading } = counterSlice.actions

// Export the reducer so the store can use it
// The reducer is our trained worker that knows how to handle the requests
export default counterSlice.reducer