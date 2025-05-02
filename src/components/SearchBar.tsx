import Form from "next/form";
import { Input } from "./ui/input";

const SearchBar = ({ query }: { query?: string }) => {
  return (
    <Form action="/" className="w-full flex-center">
      <Input
        name="query"
        defaultValue={query}
        placeholder="Search Notes"
        className="w-96"
      />
    </Form>
  );
};
export default SearchBar;
