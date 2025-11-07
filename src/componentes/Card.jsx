function Card({ name, username, email, address, website }) {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: "10px",
        margin: "20px 0",
        borderRadius: "10px",
        border: "5px solid grey",
        boxShadow: "5px 2px 5px",
      }}
    >
      <p>
        {name} @{username}
      </p>
      <p>
        Hoal le habla {name} y quiero dejar mi direccion de correo : {email} si
        calificio para el trabajo dejo mi direccion {address} y mi sitio web
        desarrollado {website}
      </p>
    </div>
  );
}
export default Card;
