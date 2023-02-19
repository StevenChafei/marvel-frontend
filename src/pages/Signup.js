import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--marvel-backend--67k4ycyfnl9b.code.run/user/signup",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <label className="forms">
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

        <input className="submit" type="submit" value="S'inscrire" />
        <div className="try">
          <Link to="/login">Tu as déjà un compte ? Connecte-toi ! </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
