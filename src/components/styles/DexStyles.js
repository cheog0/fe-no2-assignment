import styled from "styled-components";

// 추가: 전체 페이지 래퍼 스타일
export const DexPageWrapper = styled.div`
  width: 100%;
  background-color: #ffd699;
`;

export const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  background-color: #ffd699;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DexHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e3350d;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DexTitle = styled.h1`
  font-size: 2rem;
  color: #e3350d;
`;

export const DexContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DashboardContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const DashboardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardCount = styled.span`
  background-color: #e3350d;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.9rem;
`;

export const SelectedPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SelectedPokemonItem = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SelectedPokemonImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const SelectedPokemonName = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #e3350d;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c62b0a;
    transform: scale(1.1);
  }
`;

export const PokemonListContainer = styled.div`
  width: 100%;
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const EmptyDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #6c757d;
  text-align: center;
`;

export const EmptyText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`;
