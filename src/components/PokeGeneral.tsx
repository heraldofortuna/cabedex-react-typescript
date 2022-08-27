import React from "react";

import { PokemonInterface } from "../interfaces";

interface Props {
  data: PokemonInterface;
}

const PokeGeneral: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <p>ID #{data.id}</p>
      <p>Height {data.height}'</p>
      <p>Weight {data.weight} lbs.</p>
      <p>
        Abilites{" "}
        {data?.abilities?.map((item, index) => {
          const { ability } = item;
          return <span key={index}>{ability.name}</span>;
        })}
      </p>
      <p>
        Type{" "}
        {data?.types?.map((item, index) => {
          const { type } = item;
          return <span key={index}>{type.name}</span>;
        })}
      </p>
      <p>
        Forms{" "}
        {data?.forms?.map((form, index) => {
          return <span key={index}>{form.name}</span>;
        })}
      </p>
    </div>
  );
};

export default PokeGeneral;
