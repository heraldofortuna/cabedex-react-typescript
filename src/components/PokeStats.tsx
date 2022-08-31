import React from "react";
import styled from "styled-components";

import { capitalize } from "../helpers";
import { PokemonInterface } from "../interfaces";

interface Props {
  data: PokemonInterface;
}

const StyledPokeStats = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > li {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;

const PokeStats: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <StyledPokeStats>
      {data?.stats?.map((stat: any, index: number) => {
        return (
          <li key={index}>
            <h4>{capitalize(stat.stat.name)}:</h4>
            <p>{stat.base_stat}</p>
          </li>
        );
      })}
    </StyledPokeStats>
  );
};

export default PokeStats;
