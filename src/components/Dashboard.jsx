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
              <RemoveButton onClick={() => removePokemon(pokemon.id)}>
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
