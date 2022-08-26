import React, { useEffect, useState } from "react";

import { getAllPokemons, getPokemon } from "../services/index";
import { PokemonInterface, PokemonsInterface } from "../interfaces/index";
import Pokemon from "../components/Pokemon";

enum Status {
  Init = "init",
  Success = "success",
}

const Home: React.FC = () => {
  const [status, setStatus] = useState<Status>(Status.Init);
  const [pokemons, setPokemons] = useState<PokemonsInterface[]>([]);
  const [pokemon, setPokemon] = useState<PokemonInterface>();

  const handleAllPokemons = async () => {
    const allPokemons = await getAllPokemons();

    setPokemons(allPokemons);
  };

  const handlePokemon = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentPokeName = event.currentTarget.pokename.value.toLowerCase();
    const pokemon = await getPokemon(currentPokeName);

    setPokemon(pokemon);
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
      <h1>Hola Home</h1>
      <div>
        <form onSubmit={handlePokemon}>
          <input
            type="text"
            name="pokename"
            placeholder="Ingrese un Pokename:"
          />
          <button type="submit">Go!</button>
        </form>
      </div>
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  );
};

export default Home;
