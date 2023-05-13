import type React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const ThemedButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <ThemedButton onClick={handleClick}>{text}</ThemedButton>;
};

export default Button;
