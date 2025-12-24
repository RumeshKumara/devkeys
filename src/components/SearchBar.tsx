type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search shortcuts..."
        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all duration-300 hover:border-red-300"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
