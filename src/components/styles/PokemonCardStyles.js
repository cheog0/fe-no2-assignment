import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  height: 150px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;

export const PokemonImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TypeBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
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
        return "#212529";
      default:
        return "white";
    }
  }};
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => (props.isSelected ? "#6c757d" : "#e3350d")};
  color: white;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#6c757d" : "#c62b0a")};
  }
`;
