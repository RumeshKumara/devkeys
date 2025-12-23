"use client";

import { useState } from "react";

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    setAnswer("🤖 AI response will appear here...");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        DevKeys AI 🤖
      </h1>

      <textarea
        className="w-full border p-3 rounded"
        placeholder="Ask about shortcuts or commands..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-3 bg-black text-white px-5 py-2 rounded"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-6 border rounded p-4 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
}
