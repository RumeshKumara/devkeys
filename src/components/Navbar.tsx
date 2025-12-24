"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import SmoothLink from "./SmoothLink";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    if (showDropdown || showMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, showMobileMenu]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      setShowDropdown(false);
      setShowMobileMenu(false);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLinkClick = () => {
    setShowMobileMenu(false);
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
          <Link href="/" className="font-bold text-xl sm:text-2xl md:text-3xl text-[#252525] dark:text-white flex items-center gap-2 sm:gap-3">
            <Image src="/logo.png" alt="DevKeys Logo" width={50} height={50} className="sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]" />
            <span className="flex items-center">
              Dev <span className="text-red-500 italic -ml-1 sm:ml-1 bg-red-100 dark:bg-red-900/50 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">Keys</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="space-x-8 text-base font-medium text-gray-700 dark:text-gray-300">
              <SmoothLink href="/" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Home</SmoothLink>
              <SmoothLink href="/shortcuts" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/shortcuts' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Shortcuts</SmoothLink>
              <SmoothLink href="/ai" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/ai' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>AI</SmoothLink>
              <SmoothLink href="/favorites" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/favorites' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Favorites</SmoothLink>
              {!user && (
                <SmoothLink href="/login" className="transition-all duration-300 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg">Login</SmoothLink>
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className={`transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : 'rotate-0'}`}>
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            showMobileMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div ref={mobileMenuRef} className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-3 space-y-2 animate-slideDown">
              <SmoothLink 
                href="/" 
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors ${pathname === '/' ? 'bg-red-50 dark:bg-red-900/20 text-red-500 font-medium' : ''}`}
              >
                Home
              </SmoothLink>
              <SmoothLink 
                href="/shortcuts" 
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors ${pathname === '/shortcuts' ? 'bg-red-50 dark:bg-red-900/20 text-red-500 font-medium' : ''}`}
              >
                Shortcuts
              </SmoothLink>
              <SmoothLink 
                href="/ai" 
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors ${pathname === '/ai' ? 'bg-red-50 dark:bg-red-900/20 text-red-500 font-medium' : ''}`}
              >
                AI
              </SmoothLink>
              <SmoothLink 
                href="/favorites" 
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors ${pathname === '/favorites' ? 'bg-red-50 dark:bg-red-900/20 text-red-500 font-medium' : ''}`}
              >
                Favorites
              </SmoothLink>
              
              {user ? (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="px-4 py-2 flex items-center gap-3">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-red-500"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-300 font-bold text-lg">
                          {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user.displayName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <SmoothLink 
                  href="/login" 
                  onClick={handleLinkClick}
                  className="block mx-4 mt-2 text-center bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-colors font-medium"
                >
                  Login
                </SmoothLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
