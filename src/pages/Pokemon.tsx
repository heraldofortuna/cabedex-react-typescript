import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";

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
    <div>
      <div>
        <Link to="/">
          <Button text="Back" />
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="pokename"
            placeholder="Enter a Pokename"
            onChange={handleChange}
          />
          <Button text="Go!" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Pokemon;
