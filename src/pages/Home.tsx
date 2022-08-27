import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="pokemon">Buscar Pokemon</Link>
    </div>
  );
};

export default Home;
