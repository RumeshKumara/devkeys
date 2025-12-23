import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" bg-white">
      <div className="max-w-full mx-auto px-4 h-16 flex items-center mt-2 justify-between">
        <Link href="/" className="font-bold text-3xl text-[#252525] flex items-center gap-3">
          <Image src="/logo.png" alt="DevKeys Logo" width={70} height={70} />
          Dev <span className="text-red-500 italic -ml-2 bg-red-100 px-2 py-2 rounded-xl">Keys</span>
        </Link>

        <div className="space-x-8 text-base font-medium text-gray-700">
          <Link href="/shortcuts" className="hover:text-red-500 hover:scale-110 transition-all duration-300 inline-block">Shortcuts</Link>
          <Link href="/ai" className="hover:text-red-500 hover:scale-110 transition-all duration-300 inline-block">AI</Link>
          <Link href="/favorites" className="hover:text-red-500 hover:scale-110 transition-all duration-300 inline-block">Favorites</Link>
          <Link href="/login" className="transition-all duration-300 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 hover:scale-105 hover:shadow-lg">Login</Link>
        </div>
      </div>
    </nav>
  );
}
