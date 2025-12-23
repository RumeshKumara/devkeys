import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          DevKeys 🚀
        </Link>

        <div className="space-x-6 text-sm font-medium">
          <Link href="/shortcuts">Shortcuts</Link>
          <Link href="/ai">AI</Link>
          <Link href="/favorites">⭐ Favorites</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
