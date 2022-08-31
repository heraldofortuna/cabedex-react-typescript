import React from "react";
import styled from "styled-components";

import { PokemonInterface } from "../interfaces";

interface Props {
  data: PokemonInterface;
}

const StyledPokeGeneral = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > li {
    display: flex;
    flex-direction: row;
    gap: 4px;
    & > ul {
      padding-left: 16px;
    }
  }
`;

const PokeGeneral: React.FC<Props> = ({ data }) => {
  return (
    <StyledPokeGeneral>
      <li>
        <h4>ID:</h4>
        <p>#{data.id}</p>
      </li>
      <li>
        <h4>Height:</h4>
        <p>{data.height}'</p>
      </li>
      <li>
        <h4>Weight:</h4>
        <p>{data.weight} lbs.</p>
      </li>
      <li>
        <h4>Abilites:</h4>
        <ul>
          {data?.abilities?.map((item, index) => {
            const { ability } = item;
            return <li key={index}>{ability.name}</li>;
          })}
        </ul>
      </li>
      <li>
        <h4>Type:</h4>
        <ul>
          {data?.types?.map((item, index) => {
            const { type } = item;
            return <li key={index}>{type.name}</li>;
          })}
        </ul>
      </li>
      <li>
        <h4>Forms:</h4>
        <ul>
          {data?.forms?.map((form, index) => {
            return <li key={index}>{form.name}</li>;
          })}
        </ul>
      </li>
    </StyledPokeGeneral>
  );
};

export default PokeGeneral;
