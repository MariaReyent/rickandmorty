import { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function Search({ handleSearch }) {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <>
      <Text
        mb="8px"
        marginLeft="10px"
        fontWeight="bold"
        fontFamily="Gill Sans Extrabold"
        color="yellow"
        fontSize="20px"
      >
        Search Characters
      </Text>
      <form onSubmit={onSubmit}>
        <Input
          value={query}
          onChange={onChange}
          //   color="yellow"
          //   focusBorderColor="blue"
          //   placeholder="Search"
          //   backgroundColor="darkgreen"
          //   width="400px"
          //   marginBottom="12px"
          //   marginLeft="10px"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export { Search };
