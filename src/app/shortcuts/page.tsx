"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import vscode from "@/data/vscode.json";
import git from "@/data/git.json";
import linux from "@/data/linux.json";
import mysql from "@/data/mysql.json";
import maven from "@/data/maven.json";
import npm from "@/data/npm.json";
import awscli from "@/data/awscli.json";
import windows from "@/data/windows.json";

import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import ShortcutCard from "@/components/ShortcutCard";

const dataMap: any = { vscode, git, linux, mysql, maven, npm, awscli, windows };

export default function ShortcutsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  
  const [category, setCategory] = useState("vscode");
  const [query, setQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (categoryParam && dataMap[categoryParam]) {
      setCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`/shortcuts?category=${newCategory}`);
  };

  const rawData = dataMap[category];
  
  // Handle different data structures
  const data = Array.isArray(rawData) 
    ? rawData 
    : rawData.categories?.map((cat: any) => ({
        category: cat.name,
        items: cat.shortcuts.map((shortcut: any) => ({
          title: shortcut.description,
          command: shortcut.command,
          description: shortcut.description
        }))
      })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setQuery} />
        </div>
        
        <div className="mb-8">
          <CategoryTabs active={category} onChange={handleCategoryChange} />
        </div>

        <div className="space-y-8">
          {data.map((section: any) => (
            <div key={section.category} className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-5 text-gray-800 border-b-2 border-red-200 pb-3 flex items-center gap-2">
                <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items
                  .filter((item: any) =>
                    item.command
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                  .map((item: any) => (
                    <ShortcutCard
                      key={item.command}
                      {...item}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-red-500 hover:bg-red-600 border border-red-500 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hover:text-white"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
