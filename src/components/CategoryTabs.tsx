type Props = {
  active: string;
  onChange: (value: string) => void;
};

const categories = ["vscode", "git", "linux", "mysql", "maven", "npm", "awscli", "windows"];

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ease-in-out ${
            active === cat
              ? "bg-red-500 text-white shadow-lg scale-105 hover:bg-red-600"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 hover:text-red-500 hover:scale-105 hover:shadow-md"
          }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
