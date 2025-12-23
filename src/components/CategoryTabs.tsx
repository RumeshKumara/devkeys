type Props = {
  active: string;
  onChange: (value: string) => void;
};

const categories = ["vscode", "git", "linux"];

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-3 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded border ${
            active === cat
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
