import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { PokemonListContainer, PokemonGrid } from "./styles/DexStyles";

const PokemonList = ({ pokemons }) => {
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

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
