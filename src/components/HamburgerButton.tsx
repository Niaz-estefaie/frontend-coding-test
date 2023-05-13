import type React from "react";
import styled from "styled-components";

interface HamburgerButtonProps {
  toggleSidebar: () => void;
}

const HamburgerButtonWrapper = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: absolute;
  top: 8px;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ toggleSidebar }) => {
  return (
    <>
      <HamburgerButtonWrapper onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 12h18v-2H3v2zm0 5h18v-2H3v2zm0-10v2h18V7H3z" />
        </svg>
      </HamburgerButtonWrapper>
    </>
  );
};

export default HamburgerButton;
