import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export const HomeView: React.FC = () => {
  const user = useSelector((state: RootState) => {
    return state.user;
  });

  return (
    <div>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Logged in at:</strong>
        {user.loggedInAt}
      </p>
    </div>
  );
};
