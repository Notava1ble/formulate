import { signOut } from "@/lib/actions";

const Page = async () => {
  await signOut();
  return (
    <div className="w-screen h-screen flex-center text-lg">Signing Out...</div>
  );
};
export default Page;
