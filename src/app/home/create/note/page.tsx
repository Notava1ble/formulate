import CreateNoteForm from "./CreateNoteForm";

const Page = () => {
  return (
    <div className="p-6">
      <div className="w-full flex-center mt-32">
        <h1 className="text-6xl font-semibold font-poppins">Create a Note</h1>
      </div>
      <CreateNoteForm />
    </div>
  );
};
export default Page;
