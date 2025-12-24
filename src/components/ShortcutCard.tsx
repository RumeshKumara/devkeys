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
    <div className="border border-gray-200 rounded-lg p-5 bg-white flex justify-between items-start hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-red-500 transition-colors duration-300">{title}</h3>
        <code className="block mt-2 text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-md font-mono border border-gray-200">
          {command}
        </code>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>
      </div>
      <button className="ml-4 hover:scale-110 transition-all duration-300 flex-shrink-0 p-2 rounded-lg hover:bg-red-50 group/btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover/btn:text-red-500 transition-colors duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </button>
    </div>
  );
}
