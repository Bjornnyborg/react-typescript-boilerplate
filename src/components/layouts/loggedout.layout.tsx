import React from "react";
import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const LoggedOutLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.div`
  height: 100vh;
  background: ${Colors.grayLight};
`;
