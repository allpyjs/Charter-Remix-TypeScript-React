interface HighlighIconProps {
  name: string;
  imageUrl: string;
}
export default function HighlightIcon({
  name,
  imageUrl,
}: HighlighIconProps): JSX.Element {
  return (
    <div className="group relative h-28 w-28 overflow-hidden rounded-full transition-all duration-500 hover:h-56 hover:w-56 hover:rounded-xl">
      <div className="absolute bottom-0 hidden w-full flex-col items-start justify-center bg-black bg-opacity-50 p-2 group-hover:flex group-hover:animate-fade group-hover:animate-delay-300">
        <p>{name}</p>
      </div>
      <img src={imageUrl} title={`${name}`} alt={`Icon of ${name}`} className='self-center h-full w-full object-cover' />
    </div>
  );
}
