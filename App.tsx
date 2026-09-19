// http://localhost:5174/ o http://localhost:5173/
// import Titulo from "./Titulo"; si se quiere usar una funcion de otro archivo se tiene que importar
import Card, { CardBody } from "./components/Card";

// function App() {
//   return <Titulo></Titulo>; tambien se pueden cerrar <Titulo />
// }

function App() {
  return (
    <Card>
      {/* para esto es tiene que usar ReactNode */}
      <CardBody title="hola mundo" text="este es el texto" />
    </Card>
  );
}

export default App;
