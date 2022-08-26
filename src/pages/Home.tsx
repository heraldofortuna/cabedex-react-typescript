import React, { useEffect, useState } from "react";

import { getAllPokemons } from "../services/index";
import { PokemonsInterface } from "../interfaces/index";
import { Link } from "react-router-dom";

enum Status {
  Init = "init",
  Success = "success",
}

const Home: React.FC = () => {
  const [status, setStatus] = useState<Status>(Status.Init);
  const [pokemons, setPokemons] = useState<PokemonsInterface[]>([]);

  const handleAllPokemons = async () => {
    const allPokemons = await getAllPokemons();

    setPokemons(allPokemons);
  };

  useEffect(() => {
    handleAllPokemons();
    setStatus(Status.Success);
  }, []);

  if (status === Status.Init) {
    return <span>Loading ...</span>;
  }

  return (
    <div>
      <h1>Página Home</h1>
      <Link to="pokemon">Buscar Pokemon</Link>
    </div>
  );
};

export default Home;
