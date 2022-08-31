import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PokeLocationInterface, PokeLocationsInterface } from "../interfaces";
import { getPokemonLocationsData } from "../services";

const StyledPokeLocation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const PokeLocation: React.FC<PokeLocationsInterface> = ({ id }) => {
  const [locations, setLocations] = useState<any>(null);

  const handleLocations = async (id: number) => {
    const currentLocations = await getPokemonLocationsData(id);

    setLocations(currentLocations);
  };

  useEffect(() => {
    handleLocations(id);
  }, [id]);

  return (
    <StyledPokeLocation>
      {locations?.map((location: PokeLocationInterface, index: number) => {
        console.log(location);
        const { location_area } = location;
        return (
          <li key={location_area.name}>
            <h4>Location {index + 1}:</h4>
            <p>{location_area.name}</p>
          </li>
        );
      })}
    </StyledPokeLocation>
  );
};

export default PokeLocation;
