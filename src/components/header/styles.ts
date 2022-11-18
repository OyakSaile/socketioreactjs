import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  background: var(--blue-100);
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    gap: 1rem;

    > li {
      list-style: none;

      > a {
        color: var(--white-100);
        text-decoration: none;
      }
    }
  }
`;
