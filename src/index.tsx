import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonInfo from "./pages/PokemonInfo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="pokemon/:pokename" element={<PokemonInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
