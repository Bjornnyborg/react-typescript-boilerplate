import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Colors, Layout } from "../../styles/variables";
import { Icon } from "./icon.general";

type ButtonSize = "medium" | "small";
type ButtonStyles = "textual" | "default" | "primary";

export const Button: React.FC<{
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  look?: ButtonStyles;
  cy?: string;
}> = ({ children, type = "button", onClick, look = "primary", size = "medium", cy, disabled, loading }) => {
  return (
    <ButtonWrapper
      look={look}
      type={type}
      onClick={onClick}
      size={size}
      data-cy={cy}
      disabled={disabled}
      loading={loading ? 1 : 0}
    >
      {children}

      {loading && (
        <Loading>
          <Icon icon="loading" size={32} color={Colors.white} />
        </Loading>
      )}
    </ButtonWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 1s linear infinite;
`;

const ButtonWrapper = styled.button<{
  size: ButtonSize;
  look: ButtonStyles;
  disabled?: boolean;
  loading: number;
}>`
  border: none;
  position: relative;

  ${(p) =>
    (p.look === "default" || p.look === "primary") &&
    css`
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      background: none;
      vertical-align: middle;
      cursor: pointer;
      user-select: none;
      padding: 8px 32px;
      border-radius: 8px;
      font-size: 14px;
      text-decoration: none;
      font-style: normal;
      border: none;
      overflow: hidden;
      letter-spacing: 1px;
      transition: border-radius 0.3s, transform 0.3s;
      box-shadow: ${Layout.boxShadow};
    `}

  ${(p) =>
    p.look === "default" &&
    css`
      color: ${Colors.gray};
      border: 2px solid ${Colors.grayLight};
    `}

  ${(p) =>
    p.look === "primary" &&
    css`
      background: ${Colors.primary};
      color: ${Colors.white};
      border: 2px solid ${Colors.primary};
    `}

  ${(p) =>
    p.look === "textual" &&
    css`
      background: none;
      padding: 0;
    `}

  ${(p) =>
    p.size === "small" &&
    css`
      padding: 5px 10px;
    `}

  ${(p) =>
    p.disabled &&
    css`
      background: ${Colors.grayLight};
      color: ${Colors.gray};
      border: 2px solid ${Colors.grayLight};
      cursor: not-allowed;
    `}

    ${(p) =>
    p.loading == 1 &&
    css`
      color: transparent;
      cursor: not-allowed;

      > svg {
        opacity: 0;
      }
    `}

  &:hover {
    transform: translateY(1px);
    border-radius: 10px;
  }
  &:active {
    transform: translateY(3px);
  }
`;
