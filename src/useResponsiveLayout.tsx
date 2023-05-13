import { useState, useEffect } from "react";

interface ResponsiveLayout {
  isMobile: boolean;
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const useResponsiveLayout = (): ResponsiveLayout => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, showSidebar, toggleSidebar };
};

export default useResponsiveLayout;
