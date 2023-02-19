import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Character = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--rpqmwt7bcj27.code.run//comics/${characterId}`
        );
        // console.log(response.data);
        setCharacter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="characters-page">
      <div className="single-character-container">
        <div className="block-character-infos">
          <div className="single-character-description">
            <h1 className="single-character-title">{character.name}</h1>
            {character.description ? (
              <div className="single-character-description">
                {character.description}
              </div>
            ) : (
              <span className="single-character-whithout-description">
                Sorry, we don't have a description available for this character.
              </span>
            )}
          </div>
        </div>

        <img
          className="single-character-img"
          src={
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? "https://res.cloudinary.com/dsoydeobc/image/upload/v1676826865/stanlee-icons_cq0cr4.jpg"
              : character.thumbnail.path +
                "/portrait_uncanny" +
                "." +
                character.thumbnail.extension
          }
          alt={"Personnage :" + character.name}
        />
      </div>
    </div>
  );
};

export default Character;
