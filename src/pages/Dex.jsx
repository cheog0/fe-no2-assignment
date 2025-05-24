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

  // 스크롤 위치 관리
  useEffect(() => {
    // 페이지에 들어올 때 저장된 스크롤 위치로 이동
    if (location.state?.scrollY) {
      window.scrollTo(0, location.state.scrollY);
    }

    // Detail 페이지로 이동할 때 현재 스크롤 위치 저장
    const handlePokemonClick = (e) => {
      const card = e.target.closest("[data-pokemon-card]");
      if (card) {
        // 현재 스크롤 위치를 history state에 저장
        window.history.replaceState(
          { ...window.history.state, scrollY: window.pageYOffset },
          ""
        );
      }
    };

    // 페이지를 떠날 때 현재 스크롤 위치 저장
    const handleBeforeUnload = () => {
      window.history.replaceState(
        { ...window.history.state, scrollY: window.pageYOffset },
        ""
      );
    };

    document.addEventListener("click", handlePokemonClick);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handlePokemonClick);
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
