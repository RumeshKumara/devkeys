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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header Section */}
        <div className="mb-4 sm:mb-6 md:mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 p-3 sm:p-4 rounded-xl animate-pulse">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white flex flex-wrap items-center gap-2 sm:gap-3">
                Dev <span className="text-red-500 italic -ml-1 sm:-ml-2 bg-red-100 dark:bg-red-900/50 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">Keys</span> AI Assistant
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" />
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                Powered by Gemini AI - Ask anything about shortcuts and commands
              </p>
            </div>
          </div>
        </div>

        {/* Suggestion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-red-100 dark:border-red-900 p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">Git Commands</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Learn git shortcuts</p>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-red-100 dark:border-red-900 p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">VS Code Tips</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Boost productivity</p>
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border-2 border-red-100 dark:border-red-900 p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mb-2" />
            <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">Custom Query</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Ask anything</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 hover:shadow-xl transition-all duration-300">
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
            Your Question
          </label>
          <textarea
            className="w-full border-2 border-red-200 dark:border-red-800 p-3 sm:p-4 rounded-xl bg-white dark:bg-gray-900 text-sm sm:text-base text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-red-300 dark:hover:border-red-600 resize-none"
            placeholder="Ask about shortcuts or commands... e.g., 'What are the best git shortcuts for merging?'"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={askAI}
            disabled={!prompt.trim() || isLoading}
            className="mt-3 sm:mt-4 w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            {isLoading ? "Thinking..." : "Ask AI"}
          </button>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-red-100 dark:border-red-900 shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 border-b-2 border-red-200 dark:border-red-800 pb-2 sm:pb-3">
              <div className="bg-red-100 dark:bg-red-900/50 p-1.5 sm:p-2 rounded-lg">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">AI Response</h2>
            </div>
            <div className="prose prose-red max-w-none">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {answer}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
