import Boton from "../componentes/Boton"
import useFetch from "../hooks/useFetch";

function Inicio() {

  const {
    data : dataJoke,
    loading : loadiongJoke,
    error : errorJoke,
    
  } = useFetch("https://api.chucknorris.io/jokes/random");

  if(loadiongJoke){
    return <div>Cargando...</div>
  }

  if(errorJoke){
    return <div>Error al cargar frase</div>
  }


  return (
    <div>
      
      <h2>Esto es el inicio</h2>
      <h3>{dataJoke.value}</h3>

    </div>
  );
}
export default Inicio;
