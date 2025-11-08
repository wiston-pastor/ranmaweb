import { Link } from "react-router-dom";

import "./Navegacion.css";

import { CiYoutube } from "react-icons/ci";
import { IoPricetagsOutline, IoGameControllerOutline } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { MdMovieEdit } from "react-icons/md";
import { BsWebcam } from "react-icons/bs";
import { TbBrandOnlyfans } from "react-icons/tb";
import { BsFillPersonCheckFill } from "react-icons/bs";

function Navegacion() {
  return (
    <nav className="bar-nave">
      <Link className="boton-nav" to="/">
        <CiYoutube size="1.5rem" />
        <p>Mejores videos</p>
      </Link>

      <Link className="boton-nav" to="/blog">
        <IoPricetagsOutline />

        <p>Categorias</p>
      </Link>

      <Link className="boton-nav" to="/acerca-de">
        <FiTv />

        <p>Canales</p>
      </Link>

      <Link className="boton-nav" to="/FanArts">
        <FaRegStar />

        <p>FanArt</p>
      </Link>

      <Link className="boton-nav" to="/">
        <MdMovieEdit />

        <p>RK Videos</p>
      </Link>

      <Link className="boton-nav" to="/">
        <BsWebcam />

        <p>Lives</p>
      </Link>

      <Link className="boton-nav" to="/">
        <IoGameControllerOutline />

        <p>GamePlays</p>
      </Link>

      <Link className="boton-nav" to="/">
        <TbBrandOnlyfans />

        <p>OFs</p>
      </Link>

      <Link className="boton-nav" to="/Comunidad">
        <BsFillPersonCheckFill />

        <p>Comunidad</p>
      </Link>
    </nav>
  );
}
export default Navegacion;
