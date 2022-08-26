import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { capitalize } from "../helpers";
import { Infomode, PokemonInterface } from "../interfaces";
import { initialPokemon } from "../interfaces/initialValues";
import { getPokemon } from "../services";
import PokeLocation from "../components/PokeLocation";
import PokeStats from "../components/PokeStats";
import PokeGeneral from "../components/PokeGeneral";

const PokemonInfo: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonInterface>(initialPokemon);
  const [pokeinfo, setPokeinfo] = useState<Infomode>(Infomode.General);
  const { pokename } = useParams() as { pokename: string };

  const handleGetPokemon = async (name: string) => {
    const currentPokemon = await getPokemon(name);

    setPokemon(currentPokemon);
  };

  const setPokeGeneralData = (pokemon: PokemonInterface) => {
    const { id, height, weight, abilities, types, forms } = pokemon;

    return { id, height, weight, abilities, types, forms };
  };

  const setPokeStatsData = (pokemon: PokemonInterface) => {
    const { id, name, sprites, stats } = pokemon;

    return { id, name, sprites, stats };
  };

  const obj = {
    general: <PokeGeneral data={setPokeGeneralData(pokemon)} />,
    stats: <PokeStats data={setPokeStatsData(pokemon)} />,
    location: <PokeLocation id={pokemon.id} />,
  };

  useEffect(() => {
    handleGetPokemon(pokename);
  }, [pokename]);

  return (
    <div>
      <h2>{capitalize(pokename)}</h2>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <div>
        <button onClick={() => setPokeinfo(Infomode.General)}>General</button>
        <button onClick={() => setPokeinfo(Infomode.Stats)}>Stats</button>
        <button onClick={() => setPokeinfo(Infomode.Location)}>Location</button>
      </div>
      {obj[pokeinfo]}
    </div>
  );
};

export default PokemonInfo;
