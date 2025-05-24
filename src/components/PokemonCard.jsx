import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../store/pokemonSlice";
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

const PokemonCard = ({ pokemon, isSelected }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    dispatch(addPokemon(pokemon));
  };

  return (
    <Card data-pokemon-card onClick={handleCardClick}>
      <CardImage onClick={handleCardClick}>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      </CardImage>
      <CardContent>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <TypeContainer>
          {pokemon.types.map((type, index) => (
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
