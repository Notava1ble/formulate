import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="p-6 w-full">
      <div className="w-full flex-center mt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          Create a Collection
        </h1>
      </div>
      <div className="mt-20 px-16 w-full">
        <Skeleton className="w-full h-6 bg-zinc-800" />
        <Skeleton className="w-full h-6 bg-zinc-800 mt-6" />
      </div>
    </div>
  );
};
export default loading;
