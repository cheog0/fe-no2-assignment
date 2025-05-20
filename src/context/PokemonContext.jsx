import { createContext, useState, useContext } from "react";

// Context 생성
const PokemonContext = createContext();

// Context Provider 컴포넌트
export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  // 포켓몬 추가 함수
  const addPokemon = (pokemon) => {
    // 이미 선택된 포켓몬인지 확인
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

  // Context에 제공할 값
  const value = {
    selectedPokemons,
    addPokemon,
    removePokemon,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

// Custom Hook
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error(
      "PokemonProvider 내에서만 usePokemon을 사용할 수 있습니다."
    );
  }
  return context;
};
