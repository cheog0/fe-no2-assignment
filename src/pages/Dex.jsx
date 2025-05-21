import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { MOCK_DATA } from "../data/mockData";
import {
  DexContainer,
  DexHeader,
  DexTitle,
  DexContent,
  DexPageWrapper,
} from "../components/styles/DexStyles";

const Dex = ({ selectedPokemons, addPokemon, removePokemon }) => {
  return (
    <DexPageWrapper>
      <DexContainer>
        <DexHeader>
          <DexTitle>포켓몬 도감</DexTitle>
          <Link to="/">홈으로 돌아가기</Link>
        </DexHeader>

        <DexContent>
          <Dashboard
            selectedPokemons={selectedPokemons}
            removePokemon={removePokemon}
          />
          <PokemonList
            pokemons={MOCK_DATA}
            selectedPokemons={selectedPokemons}
            addPokemon={addPokemon}
          />
        </DexContent>
      </DexContainer>
    </DexPageWrapper>
  );
};

export default Dex;
