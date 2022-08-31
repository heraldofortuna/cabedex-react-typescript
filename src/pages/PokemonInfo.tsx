import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { capitalize } from "../helpers";
import { Infomode, PokemonInterface, Status } from "../interfaces";
import { initialPokemon } from "../interfaces/initialValues";
import { getPokemonData } from "../services";
import PokeLocation from "../components/PokeLocation";
import PokeStats from "../components/PokeStats";
import PokeGeneral from "../components/PokeGeneral";
import Button from "../components/Button";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  & > img {
    width: 200px;
    border: 4px solid black;
  }
`;

const StyledInfoMode = styled.div`
  width: 100%;
  display: flex;
  flex: 3;
  & > button {
    flex: 1;
  }
`;

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
    <StyledContainer>
      <Link to="/pokemon">
        <Button text="Back" />
      </Link>
      <StyledHeaderInfo>
        <h2>{capitalize(pokemon.name)}</h2>
        <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
        <StyledInfoMode>
          <Button
            onClick={() => setPokeinfo(Infomode.General)}
            text="General"
          />
          <Button onClick={() => setPokeinfo(Infomode.Stats)} text="Stats" />
          <Button
            onClick={() => setPokeinfo(Infomode.Location)}
            text="Location"
          />
        </StyledInfoMode>
      </StyledHeaderInfo>
      {renderData[pokeinfo]}
    </StyledContainer>
  );
};

export default PokemonInfo;
