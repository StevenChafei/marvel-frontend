import { Link } from "react-router-dom";
import logo from "../assets/img/logo3.png";

const Header = () => {
  return (
    <header className="content">
      <div className="content-position">
        <div className="position-logo-signup">
          <div className="logo-position">
            <div className="logo-content">
              <div className="test">
                <div className="test2">
                  <img src={logo} alt="logo marvel" />{" "}
                  <div className="acces">
                    <Link to="/signup">
                      <button className="signup-button">S'inscrire</button>
                    </Link>
                    <Link to="/login">
                      <button className="signup-button">Se connecter</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container"></div>
        </div>

        <div className="all-button-header">
          <Link to="/">
            <button className="character-button">Home Page</button>
          </Link>

          <Link to="/characters">
            <button className="character-button">PERSONNAGES</button>
          </Link>
          <Link to="/comics">
            <button className="character-button">COMICS</button>
          </Link>
          <Link to="/favorite">
            <button className="character-button">FAVORIS</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
