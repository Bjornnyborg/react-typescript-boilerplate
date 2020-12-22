import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { NotificationActions } from "../../store/notification/actions";
import { NotificationType } from "../../store/notification/types";
import { RootState } from "../../store/rootReducer";
import { Colors, Layout } from "../../styles/variables";
import { Icon } from "../general/icon.general";

export const NotificationsGlobal: React.FC = () => {
  const notifications = useSelector((state: RootState) => {
    return state.notifications.notifications;
  });

  const dispatch = useDispatch();

  const removeNotificationHandler = (time: number) => {
    dispatch(NotificationActions.CLEAN(time));
  };

  const nodeRef = useRef(null);

  return (
    <Wrapper>
      <TransitionGroup component={null}>
        {notifications.map((notification) => {
          return (
            <CSSTransition timeout={300} key={notification.id} nodeRef={nodeRef}>
              <Notification type={notification.type} ref={nodeRef}>
                <IconWrapper>
                  {notification.type === "error" && <Icon size={30} icon="alert" color={Colors.error} />}
                  {notification.type === "warning" && <Icon size={30} icon="alert" color={Colors.warning} />}
                  {notification.type === "success" && <Icon size={30} icon="check" color={Colors.success} />}
                </IconWrapper>

                <Content>
                  <Title>{notification.title}</Title>
                  {notification.message && <Message>{notification.message}</Message>}
                </Content>

                {notification.time && (
                  <Close onClick={() => removeNotificationHandler(notification.time ? notification.time : 0)}>
                    <Icon icon="close" color={Colors.grayDark} size={16} />
                  </Close>
                )}
              </Notification>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 16px 16px;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0;
`;

const Content = styled.div`
  padding: 16px 0 16px 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Message = styled.div`
  opacity: 0.8;
  font-size: 13px;
  color: ${Colors.gray};
`;

const Notification = styled.div<{
  type: NotificationType;
}>`
  background: ${Colors.white};
  display: flex;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: ${Layout.borderRadius};
  box-shadow: ${Layout.boxShadow};

  ${(p) => {
    if (p.type === "error") {
      return css`
        color: ${Colors.error};
      `;
    } else if (p.type === "success") {
      return css`
        color: ${Colors.success};
      `;
    } else if (p.type === "warning") {
      return css`
        color: ${Colors.warning};
      `;
    }
  }};

  &.enter {
    transform: translateX(100%);
    opacity: 0;
  }
  &.enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.3s, transform 0.3s;
  }
  &.exit {
    transform: translateX(0);
    opacity: 1;
  }
  &.exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.3s, transform 0.3s;
  }
`;

const Close = styled.button`
  border: none;
  background: none;
  padding: 16px;
  display: flex;
  align-self: flex-start;

  &:hover {
    opacity: 0.5;
  }
`;
