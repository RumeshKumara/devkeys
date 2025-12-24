"use client";

import Link from "next/link";
import { Github, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              Dev <span className="text-red-500 italic -ml-1 bg-gray-800 px-2 py-2 rounded-xl">Keys</span>
            </h3>
            <p className="text-gray-400 text-sm">
              All developer shortcuts and commands in one place. Your ultimate
              productivity companion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => window.location.href = '/', 500);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shortcuts"
                  className="hover:text-red-500 transition"
                >
                  All Shortcuts
                </Link>
              </li>
              <li>
                <Link
                  href="/favorites"
                  className="hover:text-red-500 transition"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:text-red-500 transition">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/RumeshKumara/devkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@devkeys.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DevKeys. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={16} className="text-red-500 fill-red-500" />{" "}
            by developers, for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
