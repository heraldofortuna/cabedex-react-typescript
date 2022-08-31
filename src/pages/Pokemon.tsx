import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";
import Input from "../components/Input";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Pokemon: React.FC = () => {
  const navigate = useNavigate();
  const [pokename, setPokename] = useState<string>("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const currentPokename = event.currentTarget.value.toLowerCase();

    setPokename(currentPokename);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`/pokemon/${pokename}`);
  };

  return (
    <StyledContainer>
      <Link to="/">
        <Button text="Back" />
      </Link>
      <form onSubmit={handleSubmit}>
        <StyledFormContainer>
          <Input
            type="text"
            name="pokename"
            placeholder="Enter a Pokename"
            onChange={handleChange}
          />
          <Button text="Go!" type="submit" />
        </StyledFormContainer>
      </form>
    </StyledContainer>
  );
};

export default Pokemon;
