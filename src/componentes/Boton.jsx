function Boton({ mensaje, icon, stilo = "" }) {
  return (
    <div className={stilo}>
      <img src={icon} alt={mensaje} />
      <button>{mensaje}</button>
    </div>
  );
}
export default Boton;
