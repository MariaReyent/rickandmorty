import { getCharacters, getCharbyName } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";
import { Search } from "../components/Search";

function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
    if (!query) {
      setPage(1);
    }
  };

  const isEmpty = !loading && !data?.results?.length;

  const isFirstPage = page === 1;
  const isNextPage = page === data?.info?.pages;

  function handleNext() {
    setPage((prevCount) => prevCount + 1);
  }

  function handlePrev() {
    setPage((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    setLoading(true);
    getCharacters(page, searchQuery)
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, [page, searchQuery]);

  if (loading) {
    return <Preloader />;
  }

  console.log(data);
  console.log(isEmpty);
  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      {isEmpty ? <div>No data</div> : <CharactersList character={data} />}
      <div className="container">
        <button className="btn" onClick={handlePrev} disabled={isFirstPage}>
          Previous
        </button>
        <button className="btn" onClick={handleNext} disabled={isNextPage}>
          Next
        </button>
      </div>
    </>
  );
}

export { Home };
