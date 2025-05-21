import { useParams, useNavigate } from "react-router-dom";
import { MOCK_DATA } from "../data/mockData";
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
} from "../components/styles/DetailStyles";

const Detail = ({ selectedPokemons, addPokemon }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === Number.parseInt(id));
  const isSelected = selectedPokemons.some((p) => p.id === Number.parseInt(id));

  // 포켓몬이 없는 경우 처리
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
          {!isSelected && (
            <button onClick={handleAddClick} className="add-button">
              포켓몬 추가
            </button>
          )}
        </DetailHeader>

        <DetailContent>
          <ImageContainer>
            <DetailImage
              src={pokemon.image || "/placeholder.svg"}
              alt={pokemon.name}
            />
          </ImageContainer>

          <InfoContainer>
            <PokemonName>
              {pokemon.name}
              <IdBadge>#{pokemon.id}</IdBadge>
            </PokemonName>

            <TypeContainer>
              {pokemon.type.map((type, index) => (
                <TypeBadge key={index} type={type}>
                  {type}
                </TypeBadge>
              ))}
            </TypeContainer>

            <Description>{pokemon.description}</Description>
          </InfoContainer>
        </DetailContent>
      </DetailCard>
    </DetailContainer>
  );
};

export default Detail;
