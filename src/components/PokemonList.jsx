import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";
import { PokemonListContainer, PokemonGrid } from "./styles/DexStyles";

const PokemonList = ({ pokemons }) => {
  // Context에서 상태 가져오기
  const { selectedPokemons } = usePokemon();

  return (
    <PokemonListContainer>
      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={selectedPokemons.some((p) => p.id === pokemon.id)}
          />
        ))}
      </PokemonGrid>
    </PokemonListContainer>
  );
};

export default PokemonList;
