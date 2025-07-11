// 🚀 MAIN APP COMPONENT - The Root of Everything
// This is where we set up all the providers and bring everything together

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store'


// import { Layout } from './components/Layout'
import { Counter } from './components/Counter'
import { PostsList } from './components/PostsList'

// Create a QueryClient instance
// This is like hiring a data manager who knows how to:
// - Cache data efficiently
// - Retry failed requests
// - Keep data fresh
// - Handle loading states
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // How long data stays fresh (5 minutes)
      staleTime: 5 * 60 * 1000,
      // How long data stays in cache (10 minutes)
      gcTime: 10 * 60 * 1000, //v5 (stands for "Garbage Collection Time")

      // Retry failed requests 3 times
      retry: 3,
      // Don't refetch when window regains focus
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    // Provider is like a magical wrapper that gives all child components
    // access to the Redux store (our data warehouse)
    <Provider store={store}>
      {/* QueryClientProvider is like a wrapper that gives all child components
          access to TanStack Query's data fetching capabilities */}
      <QueryClientProvider client={queryClient}>
        {/* Our main application layout */}
        <Counter />
        <PostsList />
        {/* <Layout /> */}
      </QueryClientProvider>
    </Provider>
  )
}

export default App