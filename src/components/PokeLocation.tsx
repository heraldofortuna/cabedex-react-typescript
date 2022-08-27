import React, { useEffect, useState } from "react";

import { getPokemonLocationsData } from "../services";

interface Props {
  id: number;
}

const PokeLocation: React.FC<Props> = ({ id }) => {
  const [locations, setLocations] = useState<any>(null);

  const handleLocations = async (id: number) => {
    const currentLocations = await getPokemonLocationsData(id);

    setLocations(currentLocations);
  };

  useEffect(() => {
    handleLocations(id);
  }, [id]);

  return (
    <div>
      Locations
      {locations?.map((location: any) => {
        const { location_area } = location;

        return (
          <div key={location_area.name}>
            <p>{location_area.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PokeLocation;
