import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="prose prose-invert prose-lg mx-auto pt-32 pb-64 overflow-y-auto">
      <div className="w-full gap-12 flex flex-col justify-between items-start">
        <Skeleton className="bg-zinc-800 w-80 h-12" />

        <div className="w-full flex flex-col justify-between items-start gap-8">
          <Skeleton className="bg-zinc-800 w-full h-6" />
          <Skeleton className="bg-zinc-800 w-full h-6" />
          <Skeleton className="bg-zinc-800 w-full h-6" />
          <Skeleton className="bg-zinc-800 w-full h-6" />
        </div>
      </div>
    </div>
  );
};
export default loading;
