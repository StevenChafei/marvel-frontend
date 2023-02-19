import { Link } from "react-router-dom";
import logo from "../assets/img/icons-name.png";

const ComicCard = ({ comic }) => {
  //   const navigate = useNavigate();
  return (
    <div className="fav-relative-comics">
      <Link to={`/comic/${comic._id}`} className="comic-card">
        <div className="comic-title">
          <img className="icons-name" src={logo} alt="logo icons" />
          {comic.title}
        </div>

        <img
          className="comic-cover"
          src={
            comic.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? "https://res.cloudinary.com/dsoydeobc/image/upload/v1676827886/image_not_available_duucrg.png"
              : comic.thumbnail.path + "." + comic.thumbnail.extension
          }
          alt={"Titre :" + comic.title}
        />

        {comic.description ? (
          <div className="comic-description">{comic.description}</div>
        ) : (
          <span className="comic-whithout-description">
            Sorry, we don't have a description available for this comic.
          </span>
        )}
      </Link>
    </div>
  );
};

export default ComicCard;
