import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background-color: #ffd699;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const DetailCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
`;

export const BackButton = styled.button`
  background-color: rgb(236, 181, 70);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex: 1;
    margin-bottom: 0;
  }
`;

export const DetailImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

export const Description = styled.p`
  line-height: 1.6;
  color: #495057;
  font-size: 1.1rem;
`;

export const IdBadge = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-left: 1rem;
`;
