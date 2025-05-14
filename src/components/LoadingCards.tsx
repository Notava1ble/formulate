import { Skeleton } from "./ui/skeleton";

const LoadingCards = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          className="bg-zinc-800 rounded-md p-6 py-8 flex justify-start items-center gap-8"
          key={i}
        >
          <div>
            <Skeleton className="bg-zinc-900 size-20" />
          </div>
          <div>
            <Skeleton className="bg-zinc-900 w-48 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default LoadingCards;
