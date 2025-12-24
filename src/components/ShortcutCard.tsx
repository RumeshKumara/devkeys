"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { addDoc, collection, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

type Props = {
  title: string;
  command: string;
  description: string;
  category?: string;
};

export default function ShortcutCard({
  title,
  command,
  description,
  category,
}: Props) {
  const router = useRouter();
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteDocId, setFavoriteDocId] = useState<string | null>(null);

  useEffect(() => {
    // Check if this shortcut is in favorites
    if (user) {
      checkFavorite();
    } else {
      setIsFavorite(false);
      setFavoriteDocId(null);
    }
  }, [title, command, user]);

  const checkFavorite = async () => {
    if (!user) return;
    
    try {
      const q = query(
        collection(db, "favorites"),
        where("uid", "==", user.uid),
        where("command", "==", command)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        setIsFavorite(true);
        setFavoriteDocId(querySnapshot.docs[0].id);
      } else {
        setIsFavorite(false);
        setFavoriteDocId(null);
      }
    } catch (error) {
      console.error("Error checking favorite:", error);
    }
  };

  const handleFavoriteClick = async () => {
    // Check if user is logged in
    if (!user) {
      // Redirect to login page
      router.push("/login");
      return;
    }

    try {
      if (isFavorite && favoriteDocId) {
        // Remove from favorites
        await deleteDoc(doc(db, "favorites", favoriteDocId));
        setIsFavorite(false);
        setFavoriteDocId(null);
      } else {
        // Add to favorites
        const docRef = await addDoc(collection(db, "favorites"), {
          uid: user.uid,
          title: title,
          command: command,
          description: description,
          category: category || "unknown",
          createdAt: new Date().toISOString(),
        });
        setIsFavorite(true);
        setFavoriteDocId(docRef.id);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white dark:bg-gray-800 flex justify-between items-start hover:border-red-300 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300 group">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-2 group-hover:text-red-500 transition-colors duration-300">{title}</h3>
        <code className="block mt-2 text-sm bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md font-mono border border-gray-200 dark:border-gray-700">
          {command}
        </code>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
          {description}
        </p>
      </div>
      <button 
        onClick={handleFavoriteClick}
        className="ml-4 hover:scale-110 transition-all duration-300 flex-shrink-0 p-2 rounded-lg hover:bg-red-50 group/btn"
        title={!user ? "Login to save favorites" : isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 transition-colors duration-300 ${isFavorite ? "text-red-500" : "text-gray-400 group-hover/btn:text-red-500"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </button>
    </div>
  );
}
