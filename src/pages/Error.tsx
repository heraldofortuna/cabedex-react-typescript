import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div>
      <h1>Error en la página</h1>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default Error;
