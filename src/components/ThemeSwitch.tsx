import type React from "react";
import { useState, useEffect } from "react";
import type { DefaultTheme } from "styled-components";
import styled from "styled-components";
const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #222;
    border-radius: 16px;
  }

  &:checked + .slider::before {
    transform: translateX(24px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.2s;
  border-radius: 16px;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: transform 0.2s;
    border-radius: 8px;
  }
`;

const ToggleLabel = styled.span`
  font-size: 14px;
  margin-left: 8px;
`;

interface ThemeSwitchProps {
  onThemeChange: (theme: "light" | "dark") => void;
  defaultTheme: DefaultTheme | "dark" | "light";
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  defaultTheme,
  onThemeChange,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (mediaQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <ThemeSwitchWrapper>
      <Label>
        <Input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        <Slider className="slider" />
      </Label>
      <ToggleLabel>
        {/* {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode */}
      </ToggleLabel>
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;
