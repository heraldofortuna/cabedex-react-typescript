import React from "react";

import { capitalize } from "../helpers";
import { PokemonInterface } from "../interfaces";

interface Props {
  data: PokemonInterface;
}

const PokeStats: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h3>Estadísticas</h3>
      {data?.stats?.map((stat: any, index: number) => {
        return (
          <div key={index}>
            <h4>{capitalize(stat.stat.name)}</h4>
            <p>{stat.base_stat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PokeStats;
