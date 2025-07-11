// 📝 POSTS LIST COMPONENT - Demonstrating TanStack Query
// This component shows how to use TanStack Query for server-side data (data from APIs)

import React from 'react'
import { useGetPostDataQuery } from '../api/posts'
import { Heart, MessageCircle, Tag, User, Loader2, AlertCircle } from 'lucide-react'

export const PostsList: React.FC = () => {
  // Use our custom hook to fetch posts
  // This gives us data, loading state, error state, and more
  const { data, isLoading, error, isError, refetch } = useGetPostDataQuery()

  // Show loading state while fetching data
  if (isLoading) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin text-blue-500 mr-3" size={24} />
          <p className="text-gray-600 text-lg">Loading posts...</p>
        </div>
      </div>
    )
  }

  // Show error state if something went wrong
  if (isError) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="text-center py-12">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold text-red-600 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-4">
            {error instanceof Error ? error.message : 'Failed to load posts'}
          </p>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Posts from API</h2>
        <p className="text-gray-600">
          This demonstrates <span className="font-semibold text-purple-600">TanStack Query</span> for server-side data
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Total posts: {data?.total || 0}
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {data?.posts.map((post) => (
          <div
            key={post.id}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-500">
                <User size={16} className="mr-2" />
                <span className="text-sm">User {post.userId}</span>
              </div>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                #{post.id}
              </span>
            </div>

            {/* Post Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
              {post.title}
            </h3>

            {/* Post Body */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.body}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    <Tag size={10} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Reactions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-red-500">
                <Heart size={16} className="mr-1" />
                <span className="text-sm">{post.reactions.likes}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MessageCircle size={16} className="mr-1" />
                <span className="text-sm">{post.reactions.dislikes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

   
    </div>
  )
}