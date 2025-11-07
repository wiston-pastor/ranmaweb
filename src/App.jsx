import "./App.css";
import UserList from "./componentes/UserList";

import Navegacion from "./componentes/Navegacion";
import { Routes, Route } from "react-router-dom";

import Inicio from './pages/Inicio'
import AcercaDe from './pages/AcercaDe'
import FanArts from "./pages/FanArts";
import Blog from "./pages/Blog"
import Comunidad from "./pages/Comunidad";


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
          <Route path="/blog" element={<Blog/>} ></Route>
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/comunidad" element={<Comunidad/>} ></Route>
          <Route path="/fanArts" element={<FanArts />} />
        </Routes>
      </main>

      <footer>Esta pagina esta hecho con mucho amor</footer>

    </div>
  );
}

export default App;
