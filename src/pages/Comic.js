import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comic = () => {
  const { id } = useParams();
  const [comic, setComic] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comic/${id}`);
        setComic(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="comics-page">
      <div className="single-comic-container">
        <div className="block-comic-infos">
          <div className="single-comic-description">
            <h1 className="single-comic-title">{comic.title}</h1>
            {comic.description ? (
              <div className="single-comic-description">
                {comic.description}
              </div>
            ) : (
              <span className="single-comic-whithout-description">
                Sorry, we don't have a description available for this comic.
              </span>
            )}
          </div>
        </div>

        <img
          className="single-comic-img"
          src={
            comic.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? "https://res.cloudinary.com/dsoydeobc/image/upload/v1676827886/image_not_available_duucrg.png"
              : comic.thumbnail.path + "." + comic.thumbnail.extension
          }
          alt={"Titre :" + comic.title}
        />
      </div>
    </div>
  );
};

export default Comic;
