import "./App.css";
import UserList from "./componentes/UserList";

import Navegacion from "./componentes/Navegacion";
import { Routes, Route } from "react-router-dom";

import Inicio from './pages/Inicio'
import AcercaDe from './pages/AcercaDe'
import FanArts from "./pages/FanArts";
 
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <h1>RKwistonCopr</h1>
      <header>
        <Navegacion />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
          <Route path="/FanArts" element={<FanArts />} />
        </Routes>
      </main>

      <footer>Esta pagina esta hecho con mucho amor</footer>

      <UserList></UserList>
    </div>
  );
}

export default App;
