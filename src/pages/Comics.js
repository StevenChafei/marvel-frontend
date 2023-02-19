import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/img/icons-name.png";

import ComicCard from "../components/ComicCard";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchComics, setSearchComics] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${searchComics}`
        );

        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [searchComics]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="comics-page">
      <div className="content-search-bar">
        <div className="search-bar">
          <form>
            <input
              value={searchComics}
              type="search"
              placeholder="Rechercher des comics..."
              onChange={(event) => {
                setSearchComics(event.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div className="bouquins">
        <div className="content-comics">
          {data.results.map((comic) => {
            <img className="icons-name" src={logo} alt="logo icons" />;
            return <ComicCard key={comic._id} comic={comic} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comics;
