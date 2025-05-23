import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";
import { PokemonListContainer, PokemonGrid } from "./styles/DexStyles";

const PokemonList = ({ pokemons }) => {
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
