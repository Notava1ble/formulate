import LoadingCards from "@/components/LoadingCards";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="p-6">
      <div className=" w-full flex-center p-24 pt-32">
        <Skeleton className="bg-zinc-800 w-80 h-12" />
      </div>
      <div className="flex-col-center mt-12">
        <LoadingCards />
      </div>
    </div>
  );
};
export default Loading;
