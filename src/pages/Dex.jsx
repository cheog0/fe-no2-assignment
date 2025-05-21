import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { MOCK_DATA } from "../data/mockData";
import { usePokemon } from "../context/PokemonContext";
import {
  DexContainer,
  DexHeader,
  DexTitle,
  DexContent,
  DexPageWrapper,
} from "../components/styles/DexStyles";

const Dex = () => {
  const { selectedPokemons } = usePokemon();

  return (
    <DexPageWrapper>
      <DexContainer>
        <DexHeader>
          <DexTitle>포켓몬 도감</DexTitle>
          <Link to="/">홈으로 돌아가기</Link>
        </DexHeader>

        <DexContent>
          <Dashboard />
          <PokemonList pokemons={MOCK_DATA} />
        </DexContent>
      </DexContainer>
    </DexPageWrapper>
  );
};

export default Dex;
