import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  background: var(--white-100);
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 1rem;
  align-items: center;
  min-height: 5rem;

  > ul {
    display: flex;
    gap: 1rem;

    > li {
      list-style: none;

      > a {
        color: var(--white-100);
        text-decoration: none;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  > img {
    max-height: 50px;
  }
`;

export const StatusSocket = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    background-color: green;
    width: 20px;
    height: 20px;
    border-radius: 100%;

    &.red {
      background-color: red;
    }
    &.green {
      background-color: green;
    }
  }

  > p {
    margin: 0;
  }

  > button {
    border: 1px solid black;
    background: none;
    padding: 0.3rem;
    transition: all 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
  }
`;
