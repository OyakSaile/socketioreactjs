import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  min-height: calc(100vh - 5rem);
  
`;

export const ContentWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
`;
