import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";

const StyledContainer = styled.div`
  outline: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledOptions = styled.div`
  outline: 1px solid purple;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Home: React.FC = () => {
  return (
    <StyledContainer>
      <p>Choose an option:</p>
      <StyledOptions>
        <Link to="pokemon">
          <Button text="Find Pokemon" />{" "}
        </Link>
      </StyledOptions>
    </StyledContainer>
  );
};

export default Home;
