import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="p-6">
      <div className="w-full flex-center mt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          Create a Collection
        </h1>
      </div>
      <div className="mt-20 px-16">
        <Skeleton className="w-full h-8px" />
        <Skeleton className="w-full h-8px" />
      </div>
    </div>
  );
};
export default loading;
