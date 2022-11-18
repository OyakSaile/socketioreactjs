import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  
`;

export const ContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  max-height: 300px;
`;
