import React from "react";

import { capitalize } from "../helpers";
import { PokemonInterface } from "../interfaces";

interface Props {
  pokemon: PokemonInterface;
}

const Pokemon: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h2>{capitalize(pokemon.name)}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div>
        {pokemon.stats.map((stat: any, index: number) => {
          return (
            <div key={index}>
              <h3>{capitalize(stat.stat.name)}</h3>
              <p>{stat.base_stat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
