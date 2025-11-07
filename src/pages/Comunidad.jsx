import Card from "../componentes/Card";
import useFetch from "../hooks/useFetch";

function Comunidad() {
  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const {
    data: randomjoke,
    loadingk,
    errore,
  } = useFetch("https://api.chucknorris.io/jokes/random");

  if (loadingPosts) {
    return <div>Cargando...</div>;
  }

  if (errorPosts) {
    return <div>Error al cargar</div>;
  }

  return (
    <div>
      <h2>Esto es la parte de comunidad</h2>
      {posts.map((e) => {
        return (
          <Card
            key={e.id}
            name={e.name}
            username={e.username}
            email={e.email}
            address={e.address.city}
            website={e.website}
          ></Card>
        );
      })}
    </div>
  );
}
export default Comunidad;
