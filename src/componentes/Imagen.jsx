function Imagen({ src, alt,estilo ='' }) {
  return(
    <img  
    src={src} 
    alt={alt}
    className={estilo} 
    />
  );
}
export default Imagen;
