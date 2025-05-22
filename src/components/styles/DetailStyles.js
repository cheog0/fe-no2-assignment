import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #ffd699 0%, #ffb366 100%);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const DetailCard = styled.div`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(to right, #e3350d, #ff6b6b);
  color: white;
`;

export const BackButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    flex: 1;
    min-height: 400px;
  }
`;

export const DetailImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    max-height: 600px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex: 1;
    padding: 0;
  }
`;

export const PokemonName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const TypeBadge = styled.span`
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => {
    switch (props.type) {
      case "전기":
        return "#FFD700";
      case "풀":
        return "#78C850";
      case "독":
        return "#A040A0";
      case "불꽃":
        return "#F08030";
      case "물":
        return "#6890F0";
      case "벌레":
        return "#A8B820";
      case "비행":
        return "#A890F0";
      case "노말":
        return "#A8A878";
      case "에스퍼":
        return "#F85888";
      case "땅":
        return "#E0C068";
      case "바위":
        return "#B8A038";
      case "얼음":
        return "#98D8D8";
      case "드래곤":
        return "#7038F8";
      case "고스트":
        return "#705898";
      case "페어리":
        return "#EE99AC";
      case "격투":
        return "#C03028";
      default:
        return "#A8A8A8";
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "노말":
      case "전기":
      case "풀":
      case "벌레":
      case "얼음":
        return "#212529";
      default:
        return "white";
    }
  }};
`;

export const Description = styled.p`
  line-height: 1.8;
  color: #495057;
  font-size: 1.1rem;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
`;

export const IdBadge = styled.span`
  color: #2c3e50;
  border: none;
  font-size: 1rem;
  font-weight: 600;
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
