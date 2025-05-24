import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mockData";
import {
  DexContainer,
  DexHeader,
  DexTitle,
  DexContent,
  DexPageWrapper,
  HomeButton,
} from "../components/styles/DexStyles";

const Dex = () => {
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  return (
    <DexPageWrapper>
      <DexContainer>
        <DexHeader>
          <DexTitle>포켓몬 도감</DexTitle>
          <HomeButton to="/" />
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
