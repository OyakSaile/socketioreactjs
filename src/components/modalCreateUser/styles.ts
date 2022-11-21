import styled from "styled-components";

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > input {
    display: block;
    height: 3rem;
    padding: 0.4rem;
  }

  > span {
    color: red;
  }

  > button {
    background-color: var(--blue-300);
    color: var(--white-100);
    border: 0;
    padding: 0.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
    &:disabled {
      cursor: not-allowed;
      background: grey;
      filter: opacity(0.3);
    }
  }
`;
