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

  const bt = (
    <img
      src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_close_48px-512.png"
      alt=""
    />
  );

  const handleClear = () => {
    setQuery("");
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
        <div className="input-wrapper">
          <button onClick={handleClear} className="icon">
            {bt}
          </button>
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
        </div>

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </>
  );
}
export { Search };
