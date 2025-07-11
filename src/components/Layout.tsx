// 🏗️ LAYOUT COMPONENT - Main Structure
// This component provides the overall structure and beautiful background for our app

import React from 'react'

import { BookOpen, Database, Zap } from 'lucide-react'

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🎓 TanStack Query + Redux Tutorial
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn the difference between <strong className="text-blue-600">client state</strong> (Redux) 
            and <strong className="text-purple-600">server state</strong> (TanStack Query) management
          </p>
        </div>

        {/* Key Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center">
            <Database className="text-blue-500 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Redux</h3>
            <p className="text-sm text-gray-600">
              Perfect for client-side state like user preferences, UI state, and app settings
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center">
            <Zap className="text-purple-500 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">TanStack Query</h3>
            <p className="text-sm text-gray-600">
              Excellent for server-side state like API data, with caching and automatic updates
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center">
            <BookOpen className="text-green-500 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Practices</h3>
            <p className="text-sm text-gray-600">
              Use Redux for client state, TanStack Query for server state, and combine them wisely
            </p>
          </div>
        </div>

      

        {/* Footer with learning summary */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🎯 Key Takeaways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Use Redux When:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Managing UI state (modals, forms, themes)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  User preferences and settings
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Complex state logic with multiple actions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  State that many components need to share
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Use TanStack Query When:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Fetching data from APIs
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Need caching and background updates
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Handling loading and error states
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Server-side data that can change
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}