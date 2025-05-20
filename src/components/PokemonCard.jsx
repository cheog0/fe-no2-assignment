"use client";

import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
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
  // Context에서 함수 가져오기
  const { addPokemon } = usePokemon();

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
        <AddButton onClick={handleAddClick}>
          {isSelected ? "추가됨" : "추가"}
        </AddButton>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
