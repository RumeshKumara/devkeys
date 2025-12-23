type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search shortcuts..."
      className="w-full p-3 border rounded mb-4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
