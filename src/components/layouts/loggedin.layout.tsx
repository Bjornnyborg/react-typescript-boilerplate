import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { UserActions } from "../../store/user/actions";
import { HeaderLayout } from "./header.layout";

export const LoggedInLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <HeaderLayout title="Logged in" actions={[{ title: "Log out", action: () => dispatch(UserActions.LOGOUT()) }]} />
      <Content>
        <div>{children}</div>
      </Content>
    </>
  );
};

const Content = styled.div`
  padding: 30px;
`;
