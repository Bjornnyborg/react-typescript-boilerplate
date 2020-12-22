import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Colors, Layout } from "../../styles/variables";

export const Input: React.FC<{
  cy?: string;
  autoFocus?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string | number;
  disabled?: boolean;
  required?: boolean;
  type?: "text" | "password" | "email" | "number" | "textarea";
}> = ({ autoFocus, label, placeholder, onChange, onBlur, value, required, type = "text", disabled, cy }) => {
  const id = uuidv4();
  return (
    <InputWrapper>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      {type === "textarea" ? (
        <InputArea
          data-cy={cy}
          autoFocus={autoFocus}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          required={required}
        />
      ) : (
        <InputField
          data-cy={cy}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          required={required}
        />
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

const inputStyling = `
  border: 2px solid ${Colors.offWhite};
  border-radius: ${Layout.borderRadius};
  padding: 8px 16px;
  display: block;
  width: 100%;
  background: ${Colors.offWhite};
  box-shadow: ${Layout.boxShadow};

  &:focus {
    outline: none;
    border-color: ${Colors.primary};
    box-shadow: ${Layout.boxShadow};
  }
`;

const InputField = styled.input`
  ${inputStyling}
`;

const InputArea = styled.textarea`
  ${inputStyling}
`;

const InputLabel = styled.label`
  font-weight: 500;
`;
