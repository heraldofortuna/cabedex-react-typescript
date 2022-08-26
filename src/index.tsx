import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonInfo from "./pages/PokemonInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/:pokename" element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
