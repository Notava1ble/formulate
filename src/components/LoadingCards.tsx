import { Skeleton } from "./ui/skeleton";

const LoadingCards = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-8 mt-16 px-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="py-8">
          <div className="size-20" />
        </Skeleton>
      ))}
    </div>
  );
};
export default LoadingCards;
