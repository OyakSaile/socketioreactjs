import { HeaderContainer, ImageContainer } from "./styles";
import logoProio from "../../assets/logoproiot.png";
import { menuItens } from "./constants/menuItems";
import { useLoading } from "../../hooks/useLoading";
import { useEffect } from "react";

export const Header: React.FC = () => {
  const { Loading } = useLoading();


  return (
    <HeaderContainer>
      <ImageContainer>
        <img src={logoProio} alt="" />
      </ImageContainer>
      <ul>
        {menuItens.map(({ linkText, linkUrl }) => (
          <li>
            <a href={linkUrl}>{linkText}</a>
          </li>
        ))}
      </ul>
    </HeaderContainer>
  );
};
