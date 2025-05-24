import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../store/pokemonSlice";
import MOCK_DATA from "../data/mockData";
import { useEffect } from "react";
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

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  const pokemon = MOCK_DATA.find((p) => p.id === Number.parseInt(id));
  const isSelected = selectedPokemons.some((p) => p.id === Number.parseInt(id));

  // 페이지를 떠날 때 스크롤 위치 저장
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("dexScrollPosition", window.scrollY.toString());
    };

    // 브라우저 뒤로 가기 버튼 감지
    window.addEventListener("popstate", handleBeforeUnload);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handleBeforeUnload);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // 컴포넌트가 언마운트될 때도 스크롤 위치 저장
      handleBeforeUnload();
    };
  }, [location]);

  if (!pokemon) {
    return (
      <DetailContainer>
        <h2>포켓몬을 찾을 수 없습니다.</h2>
        <BackButton onClick={() => navigate("/dex")}>돌아가기</BackButton>
      </DetailContainer>
    );
  }

  const handleAddClick = () => {
    dispatch(addPokemon(pokemon));
  };

  const handleRemoveClick = () => {
    dispatch(removePokemon(pokemon.id));
  };

  const handleBackClick = () => {
    // 현재 스크롤 위치 저장
    sessionStorage.setItem("dexScrollPosition", window.scrollY.toString());
    navigate("/dex");
  };

  return (
    <DetailContainer>
      <DetailCard>
        <DetailHeader>
          <BackButton onClick={handleBackClick}>← 돌아가기</BackButton>
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
            {isSelected ? (
              <AddButton
                onClick={handleRemoveClick}
                style={{ backgroundColor: "#ff4444" }}
              >
                포켓몬 제거하기
              </AddButton>
            ) : (
              <AddButton onClick={handleAddClick}>포켓몬 추가하기</AddButton>
            )}
          </InfoContainer>
        </DetailContent>
      </DetailCard>
    </DetailContainer>
  );
};

export default Detail;
