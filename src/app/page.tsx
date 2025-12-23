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
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "git",
    name: "Git",
    icon: GitBranch,
    color: "bg-orange-50 hover:bg-orange-100",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: Database,
    color: "bg-pink-50 hover:bg-pink-100",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600",
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
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
  },
  {
    id: "aws",
    name: "AWS CLI",
    icon: Cloud,
    color: "bg-yellow-50 hover:bg-yellow-100",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
  },
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    color: "bg-cyan-50 hover:bg-cyan-100",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600",
  },
];

const features = [
  { icon: Zap, text: "Instant Search" },
  { icon: Bookmark, text: "Save Favorites" },
  { icon: Sparkles, text: "Gemini AI Assistant" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center mt-16 mb-12 px-4">
        <div className="mb-6">
          
          <h1 className="text-6xl font-bold mb-4">
            Dev <span className="text-red-500 italic">Keys</span>
          </h1>
          <p className="text-xl text-gray-600 italic">
            All Developer Shortcuts in One Place
          </p>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="max-w-xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/shortcuts?category=${category.id}`} className={`${category.color} ${category.borderColor} border rounded-2xl p-1.5 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg aspect-square`}>
                <IconComponent className={`w-10 h-10 mb-1.5 ${category.iconColor}`} />
                <h3 className="text-sm font-semibold text-gray-800">{category.name}</h3>
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
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            Explore All Shortcuts
          </Link>
          <Link
            href="/ai"
            className="border-2 border-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Ask AI 🤖
          </Link>
          <Link
            href="/favorites"
            className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-50 transition-colors font-medium"
          >
            View Favorites
          </Link>
        </div>
      </section>
    </div>
  );
}
