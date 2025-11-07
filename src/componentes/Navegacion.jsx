import { Link } from 'react-router-dom'

function Navegacion(){
    return(
        <nav>

            <Link to="/">Inicio</Link>

            <Link to="/blog">Blog</Link>

            <Link to="/acerca-de">Quien es RKwiston</Link>
            
            <Link to="/FanArts">FanArt</Link>

            <Link to="/Comunidad">Comunidad</Link>
        </nav>
    );
}
export default Navegacion;