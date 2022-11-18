import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  background: var(--blue-100);
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 5rem;

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
`;

export const ImageContainer = styled.div`
  > img {
    max-height: 50px;
  }
`;
