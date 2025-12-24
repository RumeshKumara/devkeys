"use client";

import { Star, Heart, Sparkles, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import ShortcutCard from "@/components/ShortcutCard";

export default function FavoritesPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setFavorites([]);
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "favorites"),
          where("uid", "==", user.uid)
        );

        const snapshot = await getDocs(q);
        const favs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFavorites(favs);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-red-50 dark:bg-red-900/30 p-4 sm:p-6 rounded-full">
                <LogIn className="w-12 h-12 sm:w-16 sm:h-16 text-red-400" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Login Required
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header Section */}
        <div className="mb-4 sm:mb-6 md:mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="bg-red-100 dark:bg-red-900/50 p-3 sm:p-4 rounded-xl">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 fill-red-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Your Favorite Shortcuts
            </h1>
          </div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ml-0 sm:ml-12 md:ml-20">
            Quick access to your most-used commands and shortcuts
          </p>
        </div>

        {/* Favorites List or Empty State */}
        {loading ? (
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-12 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">Loading favorites...</p>
            </div>
          </div>
        ) : favorites.length === 0 ? (
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-12 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-full">
                  <Heart className="w-16 h-16 text-red-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-red-500" />
                No Favorites Yet
                <Sparkles className="w-6 h-6 text-red-500" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start adding your favorite shortcuts to quickly access them later!
              </p>
              <div className="inline-block bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-800 rounded-lg px-6 py-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  💡 <span className="font-semibold">Tip:</span> Click the bookmark icon on any shortcut to add it to your favorites
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((shortcut) => (
              <ShortcutCard
                key={shortcut.id}
                title={shortcut.title}
                command={shortcut.command}
                description={shortcut.description}
                category={shortcut.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
