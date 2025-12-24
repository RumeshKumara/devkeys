"use client";

import { Star, Heart, Sparkles } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-red-100 p-4 rounded-xl">
              <Star className="w-8 h-8 text-red-600 fill-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">
              Your Favorite Shortcuts
            </h1>
          </div>
          <p className="text-gray-600 ml-20">
            Quick access to your most-used commands and shortcuts
          </p>
        </div>

        {/* Empty State */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-12 hover:shadow-xl transition-all duration-300">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-6 rounded-full">
                <Heart className="w-16 h-16 text-red-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-red-500" />
              No Favorites Yet
              <Sparkles className="w-6 h-6 text-red-500" />
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding your favorite shortcuts to quickly access them later!
            </p>
            <div className="inline-block bg-red-50 border-2 border-red-200 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-700">
                💡 <span className="font-semibold">Tip:</span> Click the star icon on any shortcut to add it to your favorites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
