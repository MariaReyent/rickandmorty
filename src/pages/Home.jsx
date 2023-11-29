import { getCharacters, getCharacterByGender } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";
import { Search } from "../components/Search";
import { useParams } from "react-router-dom";

function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setQuery] = useState("");
  const [gender, setGender] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
    if (!query) {
      setPage(1);
    }
  };

  const isEmpty = !loading && !data?.results?.length;

  const isFirstPage = page === 1;
  const isNextPage = page === data?.info?.pages;

  const female = gender === "female" || gender === "genderless ";
  const male = gender === "male" || gender === "genderless ";

  function handleNext() {
    setPage((prevCount) => prevCount + 1);
  }
  function handlePrev() {
    setPage((prevCount) => prevCount - 1);
  }

  function filteredFemales() {
    setGender("female");
  }

  function filteredMen() {
    setGender("male");
  }

 

  useEffect(() => {
    setLoading(true);
    getCharacters(page, searchQuery)
   .then((data) => {
        setData(data);
        })
      .finally(() => setLoading(false));
      
  }, [page, searchQuery ]);
 
  // useEffect(()=>{
  //   getCharacterByGender(gender).then((data)=>{
  //     setGender(data.gender)
  //   }, [gender])
  // })

  if (loading) {
    return <Preloader />;
  }

  console.log(data);

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      <div>
        <input
          type="radio"
          value="female"
          name="gender"
          checked={female}
          onChange={filteredFemales}
        />{" "}
        Female
        <input
          type="radio"
          value="male"
          name="gender"
          checked={male}
          onChange={filteredMen}
        />{" "}
        Male
      </div>
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
