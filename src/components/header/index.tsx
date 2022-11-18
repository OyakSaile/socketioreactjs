import { HeaderContainer } from "./styles";
import logoProio from "../../assets/logoproiot.png";
import { menuItens } from "./constants/menuItems";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logoProio} alt="" />
      </span>
      <ul>
        {menuItens.map(({ active, linkText, linkUrl }) => (
          <li>
            <a href={linkUrl}>{linkText}</a>
          </li>
        ))}
      </ul>
    </HeaderContainer>
  );
};
