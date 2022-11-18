import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 4px;
  border: 1px solid red;
  color: red;
  > p {
    font-size: 1rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    color: grey;
    border: 1px solid grey;
  }
`;
