import PokemonCard from "./PokemonCard";
import { PokemonListContainer, PokemonGrid } from "./styles/DexStyles";

const PokemonList = ({ pokemons, selectedPokemons, addPokemon }) => {
  return (
    <PokemonListContainer>
      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={selectedPokemons.some((p) => p.id === pokemon.id)}
            addPokemon={addPokemon}
          />
        ))}
      </PokemonGrid>
    </PokemonListContainer>
  );
};

export default PokemonList;
