function Titulo() {
  //jsx -> React.createElement
  const nombre = "damian"; // se crea la constante que despues se puede usar

  //se pueden usar condicionales en los componentes
  if (nombre) {
    return <h1>hola {nombre}</h1>; //podemos usar js y html en la misma linea de codigo sin ningun problema
  }
  return <h1>hola mundo</h1>; //react va a transformar estas lineas de html a js que el explorador web va a leer
}

export default Titulo;
