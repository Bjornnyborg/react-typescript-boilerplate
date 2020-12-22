import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/rootReducer";
import { UserActions } from "../../store/user/actions";
import { Breakpoints } from "../../styles/variables";
import { Button } from "../general/button.general";
import { Card } from "../general/card.general";
import { Input } from "../general/input.general";

export const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loggingIn = useSelector((state: RootState) => {
    return state.loading.user;
  });

  const signInWithEmailAndPasswordHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(UserActions.LOGIN(email, password));
  };

  return (
    <Wrapper>
      <Content>
        <Card>
          <form onSubmit={(e) => signInWithEmailAndPasswordHandler(e)}>
            <LogoWrapper>
              <img src="/logo192.png" alt="" />
              React, Typescript boilerplate
            </LogoWrapper>

            <Input
              autoFocus
              label="Email"
              type="email"
              value={email}
              placeholder="Hint: It can be any email"
              required
              disabled={loggingIn}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              required
              placeholder="Hint: the password is: qwerty1234"
              disabled={loggingIn}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <Button type="submit" disabled={loggingIn}>
              Login
            </Button>
          </form>
        </Card>
      </Content>
    </Wrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  padding: 30px;
  font-weight: bold;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  padding: 16px;

  @media (min-width: ${Breakpoints.md}) {
    padding: 32px;
  }
`;

const Content = styled.div`
  padding: 0;

  @media (min-width: ${Breakpoints.md}) {
    min-width: 400px;
  }
`;
