import { Link } from "react-router-dom";
import logo from "../assets/img/icons-name.png";

const CharacterCard = ({ character }) => {
  console.log(character._id);
  return (
    <div className="fav-relative-characters">
      <Link to={`/character/${character._id}`} className="character-card">
        <div className="character-title">
          <img className="icons-name" src={logo} alt="logo icons" />
          {character.name}
        </div>

        <img
          className="character-cover"
          src={
            character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? "https://res.cloudinary.com/dsoydeobc/image/upload/v1676828605/Stan_Lee_carre%CC%81_vh55ph.png"
              : character.thumbnail.path +
                "/standard_xlarge" +
                "." +
                character.thumbnail.extension
          }
          alt={"Titre :" + character.name}
        />

        {character.description ? (
          <div className="character-description">{character.description}</div>
        ) : (
          <span className="character-whithout-description">
            Sorry, we don't have a description available for this character.
          </span>
        )}
      </Link>
    </div>
  );
};

export default CharacterCard;
