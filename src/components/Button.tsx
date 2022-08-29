import React from "react";
import styled from "styled-components";

import { ButtonInterface } from "../interfaces";

const StyledButton = styled.button`
  background-color: white;
  border: 6px double black;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    border: 6px double white;
  }
`;

const Button: React.FC<ButtonInterface> = ({ text, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
