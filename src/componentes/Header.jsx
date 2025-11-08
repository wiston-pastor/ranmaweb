import Imagen from "./Imagen";
import Boton from "./Boton";

import logoImg from "../assets/logoo.svg";

import { Link } from "react-router-dom";
import "./Header-bar.css";

import { FaRegUser, FaSearch, FaRegComments } from "react-icons/fa";
import { IoMdContrast } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTransgender, FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

function Header() {
  const sizeIcon = "1.5rem";

  return (
    <div className="header-bar">
      <ul>
        <li>
          <Link to="/">
            <Imagen
              estilo="logo-del-navbar"
              src={logoImg}
              alt="logo de empresa"
            ></Imagen>
          </Link>
        </li>

        <li>
          <BiWorld size={sizeIcon} />
        </li>
        <li>
          <FaLocationDot size={sizeIcon} />
        </li>
        <li>
          <FaTransgender size={sizeIcon} />
        </li>

        <li className="search">
          <input type="text" placeholder="Busca RKwiston videos" />
          <FaSearch size={sizeIcon} />
        </li>
        <li>
          <FaRegComments size={sizeIcon} />
        </li>
        <li>
          <FaRegUser size={sizeIcon} color="#000000" />
        </li>
        <li>
          <IoMdContrast size={sizeIcon} />
        </li>
        <li>
          <IoSettingsOutline size={sizeIcon} />
        </li>
      </ul>
    </div>
  );
}
export default Header;
