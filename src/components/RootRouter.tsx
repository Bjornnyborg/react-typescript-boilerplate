import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootState } from "../store/rootReducer";
import { HomeView } from "./../components/views/home.view";
import { LoginView } from "./../components/views/login.view";
import { LoggedInLayout } from "./layouts/loggedin.layout";
import { LoggedOutLayout } from "./layouts/loggedout.layout";

const RootRouter: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => {
    return state.user.loggedInAt;
  });

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <LoggedInLayout>
          <Switch>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </LoggedInLayout>
      ) : (
        <LoggedOutLayout>
          <Switch>
            <Route path="/">
              <LoginView />
            </Route>
          </Switch>
        </LoggedOutLayout>
      )}
    </BrowserRouter>
  );
};

export default RootRouter;
