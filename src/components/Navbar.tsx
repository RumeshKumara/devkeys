"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content jump when navbar becomes fixed */}
      {isScrolled && <div className="h-20"></div>}
      
      <nav 
        className={`transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'white',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div className="max-w-full mx-auto px-4 h-16 flex items-center mt-2 justify-between">
          <Link href="/" className="font-bold text-3xl text-[#252525] flex items-center gap-3">
            <Image src="/logo.png" alt="DevKeys Logo" width={70} height={70} />
            Dev <span className="text-red-500 italic -ml-2 bg-red-100 px-2 py-2 rounded-xl">Keys</span>
          </Link>

          <div className="space-x-8 text-base font-medium text-gray-700">
            <Link href="/" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Home</Link>
            <Link href="/shortcuts" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/shortcuts' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Shortcuts</Link>
            <Link href="/ai" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/ai' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>AI</Link>
            <Link href="/favorites" className={`hover:text-red-500 hover:scale-110 transition-all duration-500 ease-in-out inline-block ${pathname === '/favorites' ? 'text-red-500 underline underline-offset-4 scale-105' : ''}`}>Favorites</Link>
            <Link href="/login" className="transition-all duration-300 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
