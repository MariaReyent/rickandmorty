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

      <form onSubmit={onSubmit} className="form-container">
        <img
          className="icon"
          alt=""
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_close_48px-512.png"
        ></img>
        <Input
          value={query}
          onChange={onChange}
          color="white"
          focusBorderColor="blue"
          placeholder="Search"
          backgroundColor="darkgreen"
          width="400px"
          marginBottom="12px"
          marginLeft="10px"
          paddingRight="2rem"
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}
export { Search };
