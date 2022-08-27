import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="pokename"
            placeholder="Ingrese un Pokename:"
            onChange={handleChange}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    </div>
  );
};

export default Pokemon;
