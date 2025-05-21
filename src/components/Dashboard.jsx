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

const Dashboard = ({ selectedPokemons, removePokemon }) => {
  return (
    <DashboardContainer>
      <DashboardTitle>
        내 포켓몬
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
              <RemoveButton onClick={() => removePokemon(pokemon.id)}>
                X
              </RemoveButton>
              <SelectedPokemonImage src={pokemon.image} alt={pokemon.name} />
              <SelectedPokemonName>{pokemon.name}</SelectedPokemonName>
            </SelectedPokemonItem>
          ))}
        </SelectedPokemonList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
