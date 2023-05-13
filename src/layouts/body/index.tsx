import type React from "react";
import styled from "styled-components";

interface BodyProps {
  children: React.ReactNode;
}

const BodyWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body: React.FC<BodyProps> = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

export default Body;
