import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mockData";
import {
  DexContainer,
  DexHeader,
  DexTitle,
  DexContent,
  DexPageWrapper,
  HomeButton,
} from "../components/styles/DexStyles";

const Dex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  // 스크롤 위치 저장 및 복원
  useEffect(() => {
    // Detail 페이지로 이동할 때 스크롤 위치 저장
    const handlePokemonClick = (e) => {
      const card = e.target.closest("[data-pokemon-card]");
      if (card) {
        sessionStorage.setItem("dexScrollPosition", window.scrollY.toString());
      }
    };

    // 페이지에 들어올 때 저장된 스크롤 위치로 이동
    const savedPosition = sessionStorage.getItem("dexScrollPosition");
    if (savedPosition) {
      // setTimeout을 사용하여 렌더링 후 스크롤 위치 복원
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        // 스크롤 위치 복원 후 저장된 값 삭제
        sessionStorage.removeItem("dexScrollPosition");
      }, 0);
    }

    document.addEventListener("click", handlePokemonClick);
    return () => {
      document.removeEventListener("click", handlePokemonClick);
    };
  }, [location]);

  return (
    <DexPageWrapper>
      <DexContainer>
        <DexHeader>
          <DexTitle>포켓몬 도감</DexTitle>
          <HomeButton to="/" />
        </DexHeader>

        <DexContent>
          <Dashboard />
          <PokemonList pokemons={MOCK_DATA} />
        </DexContent>
      </DexContainer>
    </DexPageWrapper>
  );
};

export default Dex;
