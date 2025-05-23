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

const Dex = ({ selectedPokemons, addPokemon, removePokemon }) => {
  return (
    <DexPageWrapper>
      <DexContainer>
        <DexHeader>
          <DexTitle>포켓몬 도감</DexTitle>
          <HomeButton to="/" />
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
