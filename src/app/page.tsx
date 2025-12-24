import Link from "next/link";
import {
  Code2,
  GitBranch,
  Terminal,
  Database,
  Package,
  Cloud,
  Monitor,
  Zap,
  Bookmark,
  Sparkles,
  Key,
} from "lucide-react";

const categories = [
  {
    id: "vscode",
    name: "VS Code",
    icon: Code2,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "git",
    name: "Git",
    icon: GitBranch,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: Database,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "maven",
    name: "Maven",
    icon: Package,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "npm",
    name: "npm",
    icon: Package,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "aws",
    name: "AWS CLI",
    icon: Cloud,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
];

const features = [
  { icon: Zap, text: "Instant Search" },
  { icon: Bookmark, text: "Save Favorites" },
  { icon: Sparkles, text: "Gemini AI Assistant" },
];

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-t from-red-200 to-white dark:from-gray-800 dark:to-gray-900 relative">
      {/* Left Side Decorations */}
      <div className="hidden lg:block absolute left-4 top-1/4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + C</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Copy</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_0.5s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + V</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Paste</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_1s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + Z</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Undo</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_1.5s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + A</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Select All</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_2s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + X</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Cut</p>
          </div>
        </div>
      </div>

      {/* Right Side Decorations */}
      <div className="hidden lg:block absolute right-4 top-1/4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_0.3s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + S</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Save</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_0.8s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + F</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Find</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_1.3s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Alt + Tab</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Switch</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_1.8s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + /</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Comment</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-[float_3s_ease-in-out_2.3s_infinite]">
            <Key className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Ctrl + `</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Terminal</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center mt-8 mb-8 px-4">
        <div className="mb-6">
          
          <h1 className="text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            Dev <span className="text-red-500 italic -ml-2 bg-red-100 dark:bg-red-900/50 px-4 py-2 rounded-2xl">Keys</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            All Developer Shortcuts in One Place
          </p>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="max-w-xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/shortcuts?category=${category.id}`} className={`${category.color} dark:bg-gray-800 dark:hover:bg-gray-700 ${category.borderColor} dark:border-red-800 border rounded-2xl p-1.5 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:border-red-400 dark:hover:border-red-500 aspect-square group`}>
                <IconComponent className={`w-10 h-10 mb-1.5 ${category.iconColor} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`} />
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{category.name}</h3>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-4">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/shortcuts"
            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium"
          >
            Explore All Shortcuts
          </Link>
          <Link
            href="/ai"
            className="border-2 border-red-500 dark:border-red-600 px-8 py-3 rounded-full text-red-500 dark:text-red-400 hover:bg-red-500 hover:scale-105 hover:shadow-xl hover:text-white transition-all duration-300 font-medium flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Ask AI a Question
          </Link>
          <Link
            href="/favorites"
            className="border-2 border-red-500 dark:border-red-600 text-red-500 dark:text-red-400 px-8 py-3 rounded-full hover:bg-red-500 hover:scale-105 hover:shadow-xl hover:text-white transition-all duration-300 font-medium"
          >
            View Favorites
          </Link>
        </div>
      </section>
    </div>
  );
}
