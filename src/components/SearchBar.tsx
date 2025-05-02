import Form from "next/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchBar = ({ query }: { query?: string }) => {
  return (
    <Form action="/home/" className="w-full flex-center">
      <Input
        name="query"
        defaultValue={query}
        placeholder="Search Notes"
        className="w-96"
      />

      <Button variant="ghost" type="submit" size="icon">
        <Search />
      </Button>
    </Form>
  );
};
export default SearchBar;
