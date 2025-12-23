type Props = {
  title: string;
  command: string;
  description: string;
};

export default function ShortcutCard({
  title,
  command,
  description,
}: Props) {
  return (
    <div className="border rounded p-4 bg-white flex justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <code className="block mt-1 text-sm bg-gray-100 p-1 rounded">
          {command}
        </code>
        <p className="text-sm text-gray-600 mt-1">
          {description}
        </p>
      </div>
      <button className="text-xl">⭐</button>
    </div>
  );
}
