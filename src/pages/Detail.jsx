import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mockData";
import {
  DetailContainer,
  DetailCard,
  DetailHeader,
  BackButton,
  DetailContent,
  ImageContainer,
  DetailImage,
  InfoContainer,
  PokemonName,
  TypeContainer,
  TypeBadge,
  Description,
  IdBadge,
  AddButton,
} from "../components/styles/DetailStyles";

const Detail = ({ selectedPokemons, addPokemon }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === Number.parseInt(id));
  const isSelected = selectedPokemons.some((p) => p.id === Number.parseInt(id));

  if (!pokemon) {
    return (
      <DetailContainer>
        <h2>포켓몬을 찾을 수 없습니다.</h2>
        <BackButton onClick={() => navigate("/dex")}>돌아가기</BackButton>
      </DetailContainer>
    );
  }

  const handleAddClick = () => {
    addPokemon(pokemon);
  };

  return (
    <DetailContainer>
      <DetailCard>
        <DetailHeader>
          <BackButton onClick={() => navigate("/dex")}>← 돌아가기</BackButton>
        </DetailHeader>

        <DetailContent>
          <ImageContainer>
            <DetailImage
              src={pokemon.img_url || "/placeholder.svg"}
              alt={pokemon.korean_name}
            />
          </ImageContainer>

          <InfoContainer>
            <div>
              <IdBadge>#{String(pokemon.id).padStart(3, "0")}</IdBadge>
              <PokemonName>{pokemon.korean_name}</PokemonName>
            </div>
            <TypeContainer>
              {pokemon.types.map((type, index) => (
                <TypeBadge key={index} type={type}>
                  {type}
                </TypeBadge>
              ))}
            </TypeContainer>
            <Description>{pokemon.description}</Description>
            {!isSelected && (
              <AddButton onClick={handleAddClick}>포켓몬 추가하기</AddButton>
            )}
          </InfoContainer>
        </DetailContent>
      </DetailCard>
    </DetailContainer>
  );
};

export default Detail;
