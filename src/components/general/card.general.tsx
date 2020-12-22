import React from "react";
import styled from "styled-components";
import { Colors, Layout } from "../../styles/variables";
import { LoadingBar } from "./loadingbar.general";

export const Card: React.FC<{
  title?: string;
  children: React.ReactNode;
  loading?: boolean;
}> = ({ title, children, loading }) => {
  return (
    <CardWrapper>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children && children}</CardContent>

      {loading && (
        <LoadingWrapper>
          <LoadingBar />
        </LoadingWrapper>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border-radius: ${Layout.borderRadius};
  box-shadow: ${Layout.boxShadow};
  background: ${Colors.white};
  position: relative;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.div`
  font-weight: 500;
  padding: 12px 16px 10px;
  line-height: 1;
  border-bottom: 1px solid ${Colors.border};
`;

const LoadingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
