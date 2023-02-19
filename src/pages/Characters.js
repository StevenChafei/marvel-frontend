import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/img/icons-name.png";
// import CharacterId from "./CharacterId";

import CharacterCard from "../components/CharacterCard";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters?name=${search}`
        );

        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="characters-page">
      <div className="content-search-bar">
        <div className="search-bar">
          <form>
            <input
              value={search}
              type="search"
              placeholder="Rechercher des personnages..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div className="personnages">
        <div className="content-characters">
          {data.results.map((character) => {
            <img className="icons-name" src={logo} alt="logo icons" />;
            return <CharacterCard key={character._id} character={character} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
