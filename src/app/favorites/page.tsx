"use client";

import { Star, Heart, Sparkles, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ShortcutCard from "@/components/ShortcutCard";

export default function FavoritesPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      // Load favorites
      const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(savedFavorites);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm border-2 border-red-200 p-8 rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-6 rounded-full">
                <LogIn className="w-16 h-16 text-red-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Login Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please login to view and manage your favorite shortcuts
            </p>
            <button
              onClick={() => router.push("/login")}
              className="w-full bg-red-500 text-white py-3 px-4 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Favorites List or Empty State */}
        {favorites.length === 0 ? (
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
                  💡 <span className="font-semibold">Tip:</span> Click the bookmark icon on any shortcut to add it to your favorites
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((shortcut, index) => (
              <ShortcutCard
                key={index}
                title={shortcut.title}
                command={shortcut.command}
                description={shortcut.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
