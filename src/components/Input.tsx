import React from "react";
import styled from "styled-components";

import { InputInterface } from "../interfaces";

const StyledInput = styled.input`
  border: 2px solid gray;
  padding: 8px;
  &:active,
  &:focus-visible {
    border: 2px solid black;
    outline: 0;
  }
`;

const Input = ({ type, name, placeholder, onChange }: InputInterface) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
