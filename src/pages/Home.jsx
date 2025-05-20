"use client";

import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  Title,
  StartButton,
  PokemonImage,
} from "../components/styles/HomeStyles";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dex");
  };

  return (
    <HomeContainer>
      <PokemonImage
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
      />
      <Title>포켓몬 도감</Title>

      <StartButton onClick={handleStart}>포켓몬 도감 시작하기</StartButton>
    </HomeContainer>
  );
};

export default Home;
