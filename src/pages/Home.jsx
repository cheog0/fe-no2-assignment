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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="Pokemon Logo"
      />
      <Title>포켓몬 도감</Title>

      <StartButton onClick={handleStart}>포켓몬 도감 시작하기</StartButton>
    </HomeContainer>
  );
};

export default Home;
