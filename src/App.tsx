import { memo, useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";
import Body from "./layouts/body";
import useResponsiveLayout from "./useResponsiveLayout";
import HamburgerButton from "./components/HamburgerButton";
import Countdown from "./components/Countdown";
import type { DefaultTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const { isMobile, showSidebar, toggleSidebar } = useResponsiveLayout();
  const items = ["Item 1", "Item 2", "Item 3"];

  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const handleToggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const updateTimeLeft = () => {
    setTimeLeft(prevTimeLeft => (timeLeft > 0 ? prevTimeLeft - 1 : 15));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header
          timeLeft={timeLeft}
          toggleTheme={handleToggleTheme}
          theme={theme}
        >
          <HamburgerButton toggleSidebar={toggleSidebar} />
        </Header>
        {isMobile && <Sidebar show={showSidebar} items={items} />}
        <Body>
          <Countdown
            updateTimeLeft={updateTimeLeft}
            setTimeLeft={setTimeLeft}
          />
        </Body>
      </ThemeProvider>
    </>
  );
}

export default memo(App);
