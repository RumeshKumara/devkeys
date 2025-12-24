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

  useEffect(() => {
    if (categoryParam && dataMap[categoryParam]) {
      setCategory(categoryParam);
    }
  }, [categoryParam]);

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
    <>
      <SearchBar onSearch={setQuery} />
      <CategoryTabs active={category} onChange={handleCategoryChange} />

      <div className="space-y-6">
        {data.map((section: any) => (
          <div key={section.category}>
            <h2 className="font-bold mb-3">
              {section.category}
            </h2>

            <div className="space-y-3">
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
    </>
  );
}
