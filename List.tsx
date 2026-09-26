// import { MouseEvent } from "react"; se importa el evento de mouse

import { useState } from "react";

type Props = {
  data: string[]; //se le da un array de string
  //en la linea 8 se indica que onselect puede ser indefinida pero la funcion esta siendo usada en app
  onSelect?: (elemento: string) => void; //indica que onselect no va a retornar nada y a elemento se le puede ndicar lo que sea
}; //type funciona igual que interface

function List({ data, onSelect }: Props) {
  //useState es un hook es una funcionalidad de react que permite modificar variables
  const [index, setIndex] = useState(1); //devuelve un array, index es una variable que podemos cambiar

  //se puede hacer con una constante o con una funcion, incluso en la misma linea dde codigo y setIndex es una funcion que actualiza index
  const handleClick = (i: number, elemento: string) => {
    //aqui llamamos al evento y le asignamos el evento del mouse o en este caso string para que mas adelante pueda llamar a elemento
    setIndex(i);
    onSelect?.(elemento); //para que esta linea funcione arriba le pasamos el tipo de string, y el ?. indica que se ejecute si esta definida
  };
  //aqui se manda a llamar a data
  return (
    <ul className="list-group">
      {data.map(
        (
          elemento,
          i, //aqui llamamos a recorrer el emento con map y hacemos que los guarde en elementos
        ) => (
          //a partir del li es un elemento jsx
          <li //aqui le pasamos en evento como e y lo llamamos en la consola
            onClick={() => handleClick(i, elemento)} //se hace una funciond de click, pero al ser solamente de una linea se hace ahi mismo
            key={elemento}
            className={`list-group-item ${index === i ? "active" : ""}`} //con active resalatmos un elemento
          >
            {elemento}
          </li> //hacemos que la llave del elemento del array sea el mismo elemento
        ),
      )}
    </ul>
  );
} // esto nos imprime un array en base otro array

export default List;
