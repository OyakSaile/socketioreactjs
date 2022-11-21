import styled from "styled-components";

export const CardContainer = styled.div`
  min-height: 170px;
  background-color: var(--blue-300);
  color: var(--white-100);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all ease 0.5s;
  padding: 1rem;

  > span {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    display: block;
    width: fit-content;
  }

  &:hover {
    background-color: var(--blue-100);
    color: var(--white-100);
    > span {
      background-color: var(--blue-300);
    }
  }

  > p {
    font-size: 0.75rem;
    margin: 0.5rem 0;
  }
`;
