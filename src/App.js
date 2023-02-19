import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import CharacterId from "./pages/CharacterId";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchComics, setSearchComics] = useState("");

  return (
    <Router>
      <Header />
      {/* <Pagination /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters search={(search, setSearch)} />}
        />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route
          path="/comics"
          element={<Comics search={(searchComics, setSearchComics)} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
