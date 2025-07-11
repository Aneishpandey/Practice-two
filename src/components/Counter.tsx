// 🔢 COUNTER COMPONENT - Demonstrating Redux State Management
// This component shows how to use Redux for client-side state (data that lives in our app)

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../store/store'
import { increment, decrement, incrementByAmount, reset } from '../store/counterSlice'
import { Plus, Minus, RotateCcw } from 'lucide-react'

export const Counter: React.FC = () => {
  // useSelector is like asking our warehouse: "What's the current state?"
  // We specify exactly what part of the state we want
  const count = useSelector((state: RootState) => state.counter.value)
  const isLoading = useSelector((state: RootState) => state.counter.isLoading)
  
  // useDispatch is like getting a communication device to send requests to our warehouse
  const dispatch = useDispatch()
  
  // Handle increment by custom amount
  const handleIncrementByAmount = () => {
    // Ask user for amount and add it to counter
    const amount = prompt('Enter amount to add:')
    if (amount && !isNaN(Number(amount))) {
      dispatch(incrementByAmount(Number(amount)))
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
      {/* Header with title and description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Redux Counter</h2>
        <p className="text-gray-600">
          This demonstrates <span className="font-semibold text-blue-600">Redux state management</span> for client-side data
        </p>
      </div>

      {/* Counter Display */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold shadow-lg">
          {count}
        </div>
        {isLoading && (
          <p className="text-blue-500 mt-2 font-medium">Processing...</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Increment button */}
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <Plus size={20} />
          Add 1
        </button>

        {/* Decrement button */}
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <Minus size={20} />
          Minus 1
        </button>

        {/* Custom amount button */}
        <button
          onClick={handleIncrementByAmount}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          Add Custom
        </button>

        {/* Reset button */}
        <button
          onClick={() => dispatch(reset())}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <RotateCcw size={20} />
          Reset
        </button>
      </div>

    </div>
  )
}