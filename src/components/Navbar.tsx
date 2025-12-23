import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" bg-white">
      <div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl text-[#252525] flex items-center gap-3">
          <Image src="/logo.png" alt="DevKeys Logo" width={70} height={70} />
          Dev <span className="text-[#cc1e1e] bg-red-300 p-4 rounded">Keys</span>
        </Link>

        <div className="space-x-8 text-base font-medium text-gray-700">
          <Link href="/shortcuts" className="hover:text-[#cc1e1e] transition-colors">Shortcuts</Link>
          <Link href="/ai" className="hover:text-[#cc1e1e] transition-colors">AI</Link>
          <Link href="/favorites" className="hover:text-[#cc1e1e] transition-colors">⭐ Favorites</Link>
          <Link href="/login" className="hover:text-[#cc1e1e] transition-colors bg-[#cc1e1e] text-white px-5 py-2 rounded-full">Login</Link>
        </div>
      </div>
    </nav>
  );
}
