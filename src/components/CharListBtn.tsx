import { IconType } from "react-icons";

interface ImageListBtnProps {
  title: string;
  icon?: IconType;
}

export default function CharListBtn({
  title,
  icon: Icon,
}: ImageListBtnProps): JSX.Element {
  return (
    <button
      // If no icon, equal 4px padding on x axis
      className={`group flex items-center justify-center space-x-1 rounded-full border border-indigo-700 py-1 ${
        Icon ? `pl-3 pr-4` : `px-4`
      } text-gray-500 transition-all duration-300 ease-in-out hover:scale-105 hover:border-4 hover:text-white`}
    >
      {Icon && (
        <Icon
          size="1.5em"
          title={title}
          className="text-gray-500 group-hover:animate-pulse group-hover:text-yellow-400 group-hover:animate-duration-500 group-hover:animate-infinite"
        />
      )}
      <p className="whitespace-nowrap">{title}</p>
    </button>
  );
}
