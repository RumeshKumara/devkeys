import Link from "next/link";


export default function Home() {
  return (
     <section className="text-center mt-20">
      <h1 className="text-4xl font-bold">DevKeys 🚀</h1>
      <p className="mt-4 text-gray-600">
        All Developer Shortcuts & Commands in One Place
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/shortcuts"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Explore Shortcuts
        </Link>
        <Link
          href="/ai"
          className="border px-6 py-3 rounded"
        >
          Ask AI 🤖
        </Link>
      </div>
    </section>
  );
}
