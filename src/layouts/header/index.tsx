import type { ReactNode } from "react";
import type React from "react";
import type { DefaultTheme } from "styled-components";
import styled from "styled-components";
import ThemeSwitch from "../../components/ThemeSwitch";

interface HeaderProps {
  theme: DefaultTheme;
  children: ReactNode;
  timeLeft: number;
  toggleTheme: () => void;
}

const MenuWrapper = styled.div`
  top: 0;
`;

const ThemeWrapper = styled.div`
  padding: 8px;
`;

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header: React.FC<HeaderProps> = ({
  children,
  timeLeft,
  theme,
  toggleTheme,
}) => {
  return (
    <HeaderWrapper>
      <MenuWrapper>{children}</MenuWrapper>
      <HeaderTitle>{timeLeft} seconds left</HeaderTitle>
      <ThemeWrapper>
        <ThemeSwitch defaultTheme={theme} onThemeChange={toggleTheme} />
      </ThemeWrapper>
    </HeaderWrapper>
  );
};

export default Header;
