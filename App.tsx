// http://localhost:5174/ o http://localhost:5173/
// import Titulo from "./Titulo"; si se quiere usar una funcion de otro archivo se tiene que importar
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

// function App() {
//   return <Titulo></Titulo>; tambien se pueden cerrar <Titulo />
// }
/**
 * truthy
 * falsy : 0, "", false, undefined y null
 */

//se crea la const de list que funciona mas abajo, data se creo en un archivo aparte con props de string
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 1000);
  };

  const list = ["queque", "canelo", "la enana"];
  const handleSelect = (elemento: string) => {
    //al no conocer el tipo de dato le temos que indicar
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      {/* para esto es tiene que usar ReactNode */}
      <CardBody title="hola mundo" text="este es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} /> //cada que le pasamos una funciona un componenete se llama handleSelect*
      ) : (
        "no hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        hola mundo
      </Button>
      {/* aqui se manda a llamar dato con la const de list*/}
    </Card>
  );
}

export default App;
