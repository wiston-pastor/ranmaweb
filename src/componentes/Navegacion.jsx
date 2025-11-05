import { Link } from 'react-router-dom'

function Navegacion(){
    return(
        <nav>

            <Link to="/">Inicio</Link>

            <Link to="/AcercaDe">Quien es RKwiston</Link>
            
            <Link to="/FanArts">FanArt</Link>
        </nav>
    );
}
export default Navegacion;