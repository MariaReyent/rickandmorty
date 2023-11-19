import { getCharacters } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";

function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    getCharacters(page)
      .then((data) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      {<CharactersList character={data} />}
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
