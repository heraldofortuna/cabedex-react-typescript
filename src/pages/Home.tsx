import React, { useEffect, useState } from "react";

import { getAllPokemons, getPokemon } from "../services/index";
import { PokemonsInterface } from "../interfaces/index";
import { capitalize } from "../helpers/index";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsInterface[]>([]);
  const [pokename, setPokename] = useState<string>("");
  const [pokemon, setPokemon] = useState<any>([]);

  const handleAllPokemons = async () => {
    const allPokemons = await getAllPokemons();

    setPokemons(allPokemons);
  };

  const handlePokemon = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const currentPokeName =
      event.currentTarget.pokename.value.toLowerCase();
    const pokemon = await getPokemon(currentPokeName);

    setPokename(currentPokeName);
    setPokemon(pokemon);
  };

  useEffect(() => {
    handleAllPokemons();
  }, []);

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
      <div>
        <h1>{capitalize(pokename)}</h1>
        <h2>Base experience: {pokemon.base_experience}</h2>
      </div>
    </div>
  );
};

export default Home;
