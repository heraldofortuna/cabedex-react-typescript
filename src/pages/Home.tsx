import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="pokemon">
        <Button text="Buscar Pokemon" />{" "}
      </Link>
    </div>
  );
};

export default Home;
