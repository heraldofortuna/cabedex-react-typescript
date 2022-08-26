import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pokemon: React.FC = () => {
  const [pokename, setPokename] = useState<string>("");

  const handlePokemon = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentPokeName = event.currentTarget.pokename.value.toLowerCase();

    setPokename(currentPokeName);
  };

  return (
    <div>
      <div>
        <form onSubmit={handlePokemon}>
          <input
            type="text"
            name="pokename"
            placeholder="Ingrese un Pokename:"
          />
          <Link to={`${pokename}`}>Go!</Link>
        </form>
      </div>
    </div>
  );
};

export default Pokemon;
