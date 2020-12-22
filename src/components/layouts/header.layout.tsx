import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Colors } from "../../styles/variables";
import { Button } from "../general/button.general";

type HeaderAction = {
  title: string;
  action: () => void;
};

export const HeaderLayout: React.FC<{
  title: string;
  actions?: HeaderAction[];
}> = ({ actions, title }) => {
  return (
    <Header>
      <h1>{title}</h1>

      {actions && (
        <Actions>
          {actions.map((action) => (
            <Button onClick={action.action} key={uuidv4()}>
              {action.title}
            </Button>
          ))}
        </Actions>
      )}
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.border};
  position: relative;
  padding: 24px;
  z-index: 1;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 0;
  right: 24px;
  transform: translateY(50%);

  button {
    margin-left: 8px;
  }
`;
