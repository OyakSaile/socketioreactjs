import styled from "styled-components";
import bgImageChat from "./assets/bgImageChat.jpg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  background-position: center center;
  background-image: url(${bgImageChat});

  background-size: 100%;
`;

export const Header = styled.div`
  display: flex;

  > input {
    display: block;
    width: 100%;
    padding: 0.5rem;
  }
`;

export const ConversationChat = styled.div`
  flex: 1;
  padding: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ChatBallon = styled.div`
  margin: 1rem;
  background-color: var(--blue-100);
  min-width: 12rem;
  word-wrap: break-word;
  padding: 1rem;
  border-radius: 5px;
  color: var(--white-100);
`;

export const SendArea = styled.form`
  padding: 1rem;
  display: flex;
  background: var(--blue-300);
  border: 0 solid black;
  width: 80%;
  align-self: center;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > input {
    background: transparent;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50%;
    border: 0;
    color: var(--white-100);
    font-size: 1rem;

    &::placeholder {
      color: var(--white-100);
    }

    &:focus {
      outline: none;
    }
  }
  > button {
    background: none;
    border: 0;
  }
`;
