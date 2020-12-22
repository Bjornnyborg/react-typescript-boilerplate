import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LoadingState } from "../../store/loading/types";
import { RootState } from "../../store/rootReducer";
import { LoadingBar } from "../general/loadingbar.general";

export const LoadingGlobal: React.FC = () => {
  const loading = useSelector((state: RootState) => {
    return state.loading;
  });

  const currentLoader = Object.keys(loading).find((x) => loading[x as keyof LoadingState]);

  if (!currentLoader) {
    return null;
  }

  return (
    <Wrapper>
      <LoadingBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
`;
