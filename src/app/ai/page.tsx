"use client";

import { useState } from "react";
import { Sparkles, Send, Bot, Lightbulb, Zap } from "lucide-react";

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askAI = async () => {
    setIsLoading(true);
    setAnswer("🤖 AI response will appear here...");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-xl animate-pulse">
              <Sparkles className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                Dev <span className="text-red-500 italic -ml-2 bg-red-100 px-2 py-2 rounded-xl">Keys</span> AI Assistant
                <Bot className="w-8 h-8 text-red-600" />
              </h1>
              <p className="text-gray-600 mt-2">
                Powered by Gemini AI - Ask anything about shortcuts and commands
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border-2 border-red-100 p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Lightbulb className="w-6 h-6 text-red-500 mb-2" />
            <p className="text-sm font-semibold text-gray-700">Git Commands</p>
            <p className="text-xs text-gray-500">Learn git shortcuts</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border-2 border-red-100 p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-6 h-6 text-red-500 mb-2" />
            <p className="text-sm font-semibold text-gray-700">VS Code Tips</p>
            <p className="text-xs text-gray-500">Boost productivity</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border-2 border-red-100 p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Bot className="w-6 h-6 text-red-500 mb-2" />
            <p className="text-sm font-semibold text-gray-700">Custom Query</p>
            <p className="text-xs text-gray-500">Ask anything</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Your Question
          </label>
          <textarea
            className="w-full border-2 border-red-200 p-4 rounded-xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-red-300 resize-none"
            placeholder="Ask about shortcuts or commands... e.g., 'What are the best git shortcuts for merging?'"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={askAI}
            disabled={!prompt.trim() || isLoading}
            className="mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Send className="w-5 h-5" />
            {isLoading ? "Thinking..." : "Ask AI"}
          </button>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-red-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 border-b-2 border-red-200 pb-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">AI Response</h2>
            </div>
            <div className="prose prose-red max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
