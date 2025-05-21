import { getCollectionsForUserId } from "@/supabase/db/collection";
import CreateCollectionForm from "./CreateCollectionForm";

const Page = async () => {
  const collections = await getCollectionsForUserId();

  return (
    <div className="p-6">
      <div className="w-full flex-center mt-32">
        <h1 className="text-6xl font-semibold font-poppins">
          Create a Collection
        </h1>
      </div>
      <CreateCollectionForm collections={collections} />
    </div>
  );
};
export default Page;
