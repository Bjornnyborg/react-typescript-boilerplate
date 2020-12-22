import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { LoadingGlobal } from "./components/globals/loading.global";
import { NotificationsGlobal } from "./components/globals/notifications.global";
import RootRouter from "./components/RootRouter";
import store from "./store";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <LoadingGlobal />
      <NotificationsGlobal />
      <RootRouter />
    </StoreProvider>
  );
};

export default App;
