"use client";

import { useState } from "react";
import vscode from "@/data/vscode.json";
import git from "@/data/git.json";
import linux from "@/data/linux.json";

import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import ShortcutCard from "@/components/ShortcutCard";

const dataMap: any = { vscode, git, linux };

export default function ShortcutsPage() {
  const [category, setCategory] = useState("vscode");
  const [query, setQuery] = useState("");

  const data = dataMap[category];

  return (
    <>
      <SearchBar onSearch={setQuery} />
      <CategoryTabs active={category} onChange={setCategory} />

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
