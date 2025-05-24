import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  // 스크롤 위치 저장
  useEffect(() => {
    // 페이지를 떠날 때 스크롤 위치 저장
    const handleBeforeUnload = () => {
      sessionStorage.setItem("dexScrollPosition", window.scrollY.toString());
    };

    // 페이지에 들어올 때 저장된 스크롤 위치로 이동
    const savedPosition = sessionStorage.getItem("dexScrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      // 스크롤 위치 복원 후 저장된 값 삭제
      sessionStorage.removeItem("dexScrollPosition");
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
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
