import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
}

export const Button: React.FC<ButtonsProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <p>{children}</p>
    </ButtonContainer>
  );
};
