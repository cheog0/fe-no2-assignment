"use client";

import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../store/pokemonSlice";
import {
  DashboardContainer,
  DashboardTitle,
  DashboardCount,
  SelectedPokemonList,
  SelectedPokemonItem,
  SelectedPokemonImage,
  SelectedPokemonName,
  RemoveButton,
  EmptyDashboard,
  EmptyText,
} from "./styles/DexStyles";

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  const handleRemove = (id) => {
    dispatch(removePokemon(id));
  };

  return (
    <DashboardContainer>
      <DashboardTitle>
        나만의 포켓몬
        <DashboardCount>{selectedPokemons.length}/6</DashboardCount>
      </DashboardTitle>

      {selectedPokemons.length === 0 ? (
        <EmptyDashboard>
          <EmptyText>포켓몬을 선택해주세요!</EmptyText>
        </EmptyDashboard>
      ) : (
        <SelectedPokemonList>
          {selectedPokemons.map((pokemon) => (
            <SelectedPokemonItem key={pokemon.id}>
              <RemoveButton onClick={() => handleRemove(pokemon.id)}>
                X
              </RemoveButton>
              <SelectedPokemonImage
                src={pokemon.img_url}
                alt={pokemon.korean_name}
              />
              <SelectedPokemonName>{pokemon.korean_name}</SelectedPokemonName>
            </SelectedPokemonItem>
          ))}
        </SelectedPokemonList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
