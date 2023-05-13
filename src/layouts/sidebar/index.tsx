import type React from "react";
import styled from "styled-components";

interface SidebarProps {
  items: string[];
  show: boolean;
}

const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
  background-color: ${props => props.theme.colors.primary};
  width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-250px)"};
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const SidebarNav = styled.nav`
  flex: 1;
`;

const SidebarNavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ items, show }) => {
  return (
    <SidebarWrapper isOpen={show}>
      <SidebarHeader>Menu</SidebarHeader>
      <SidebarNav>
        {items.map(item => (
          <SidebarNavItem key={item}>{item}</SidebarNavItem>
        ))}
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
