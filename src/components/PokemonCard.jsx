import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImage,
  PokemonImage,
  CardContent,
  PokemonName,
  TypeContainer,
  TypeBadge,
  AddButton,
} from "./styles/PokemonCardStyles";

const PokemonCard = ({ pokemon, isSelected, addPokemon }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    addPokemon(pokemon);
  };

  return (
    <Card>
      <CardImage onClick={handleCardClick}>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
      </CardImage>
      <CardContent>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypeContainer>
          {pokemon.type.map((type, index) => (
            <TypeBadge key={index} type={type}>
              {type}
            </TypeBadge>
          ))}
        </TypeContainer>
        <AddButton onClick={handleAddClick} isSelected={isSelected}>
          {isSelected ? "추가됨" : "추가"}
        </AddButton>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
