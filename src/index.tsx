import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";

import GlobalStyle from "./styles/globalStyles";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonInfo from "./pages/PokemonInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <div className="app">
      <div className="wrapper">
        <Header />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pokemon" element={<Pokemon />} />
            <Route
              path="pokemon/:pokename"
              element={<PokemonInfo />}
            />
          </Routes>
        </HashRouter>
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
