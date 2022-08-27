import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { capitalize } from "../helpers";
import { Infomode, PokemonInterface, Status } from "../interfaces";
import { initialPokemon } from "../interfaces/initialValues";
import { getPokemonData } from "../services";
import PokeLocation from "../components/PokeLocation";
import PokeStats from "../components/PokeStats";
import PokeGeneral from "../components/PokeGeneral";

const PokemonInfo: React.FC = () => {
  const { pokename } = useParams() as { pokename: string };
  const [status, setStatus] = useState<Status>(Status.Init);
  const [pokemon, setPokemon] = useState<PokemonInterface>(initialPokemon);
  const [pokeinfo, setPokeinfo] = useState<Infomode>(Infomode.General);

  const handleGetPokemon = async (name: string) => {
    const currentPokemon = await getPokemonData(name);

    setPokemon(currentPokemon);
  };

  const setPokeGeneralData = (pokemon: PokemonInterface) => {
    const { id, name, height, weight, abilities, types, forms } = pokemon;

    return { id, name, height, weight, abilities, types, forms };
  };

  const setPokeStatsData = (pokemon: PokemonInterface) => {
    const { id, name, sprites, stats } = pokemon;

    return { id, name, sprites, stats };
  };

  const renderData = {
    general: <PokeGeneral data={setPokeGeneralData(pokemon)} />,
    stats: <PokeStats data={setPokeStatsData(pokemon)} />,
    location: <PokeLocation id={pokemon.id} />,
  };

  useEffect(() => {
    handleGetPokemon(pokename);
    setStatus(Status.Success);
  }, [pokename]);

  if (status === Status.Init) return <span>Loading data ...</span>;

  return (
    <div>
      <h2>{capitalize(pokemon.name)}</h2>
      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
      <div>
        <button onClick={() => setPokeinfo(Infomode.General)}>General</button>
        <button onClick={() => setPokeinfo(Infomode.Stats)}>Stats</button>
        <button onClick={() => setPokeinfo(Infomode.Location)}>Location</button>
      </div>
      {renderData[pokeinfo]}
    </div>
  );
};

export default PokemonInfo;
