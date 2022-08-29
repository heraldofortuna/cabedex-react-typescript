import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  outline: 1px solid red;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Cabedex</h1>
    </StyledHeader>
  );
};

export default Header;
