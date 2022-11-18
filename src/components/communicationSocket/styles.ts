import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  > p {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > span {
      width: 10px;
      height: 10px;
      background-color: green;
      border-radius: 100%;
    }
  }
`;
