import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../styles/variables";

export const LoadingBar: React.FC = () => {
  return <Loader />;
};

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(200%);
  }
`;

const Loader = styled.div`
  transform: translateX(-100%);
  width: 50%;
  height: 3px;
  background ${Colors.primary};
  animation: ${animation} 1s linear infinite;
`;
