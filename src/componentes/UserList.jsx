import UseCard from "./UserCard";
import { useState, useEffect } from "react";

function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obtencionData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/bulbasaur"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("No se puedo obtener data por el error:", error);
      }
    };
    obtencionData();
  }, []);

  return (
    <div>
      <h2>Datos de la pokeapi:</h2>
      {}
      {data.name}
      {"#"+data.order}
      {}
      {"ver grafica"}
    </div>
  );
}
export default UserList;
