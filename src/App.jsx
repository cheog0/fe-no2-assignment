import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

function App() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬 추가 함수
  const addPokemon = (pokemon) => {
    if (selectedPokemons.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    // 최대 6마리 제한
    if (selectedPokemons.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }

    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  // 포켓몬 제거 함수
  const removePokemon = (id) => {
    setSelectedPokemons(
      selectedPokemons.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex
              selectedPokemons={selectedPokemons}
              addPokemon={addPokemon}
              removePokemon={removePokemon}
            />
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <Detail
              selectedPokemons={selectedPokemons}
              addPokemon={addPokemon}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
