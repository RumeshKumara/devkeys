"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      setShowDropdown(false);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isScrolled && <div className="h-20"></div>}
      
      <nav 
        className={`transition-all duration-300 bg-white dark:bg-gray-900 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg dark:shadow-gray-800' : ''}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : undefined,
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div className="max-w-full mx-auto px-4 h-16 flex items-center mt-2 justify-between">
          <Link href="/" className="font-bold text-3xl text-[#252525] dark:text-white flex items-center gap-3">
            <Image src="/logo.png" alt="DevKeys Logo" width={70} height={70} />
            Dev <span className="text-red-500 italic -ml-2 bg-red-100 dark:bg-red-900/50 px-2 py-2 rounded-xl">Keys</span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="space-x-8 text-base font-medium text-gray-700 dark:text-gray-300">
              <Link href="/" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Home</Link>
              <Link href="/shortcuts" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/shortcuts' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Shortcuts</Link>
              <Link href="/ai" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/ai' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>AI</Link>
              <Link href="/favorites" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/favorites' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Favorites</Link>
              {!user && (
                <Link href="/login" className="transition-all duration-300 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg">Login</Link>
              )}
            </div>
            <ThemeToggle />
            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  title={user.displayName || "User menu"}
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-red-500 hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-red-100 dark:bg-red-900 flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-red-600 dark:text-red-300 font-bold text-lg">
                        {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
