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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = command;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    if (!user || !db) return;
    
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

    if (!db) {
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
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 md:p-5 bg-white dark:bg-gray-800 flex justify-between items-start hover:border-red-300 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300 group">
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-base sm:text-lg mb-2 group-hover:text-red-500 transition-colors duration-300">{title}</h3>
        <div className="relative mt-2 flex items-center">
          <code className="flex-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-mono border border-gray-200 dark:border-gray-700 overflow-x-auto pr-10">
            {command}
          </code>
          <button
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy command"}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 leading-relaxed">
          {description}
        </p>
      </div>
      <button 
        onClick={handleFavoriteClick}
        className="ml-2 sm:ml-4 hover:scale-110 transition-all duration-300 flex-shrink-0 p-1.5 sm:p-2 rounded-lg hover:bg-red-50 group/btn"
        title={!user ? "Login to save favorites" : isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isFavorite ? "text-red-500" : "text-gray-400 group-hover/btn:text-red-500"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </button>
    </div>
  );
}
