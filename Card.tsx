//estos bloques de codigo permiten separar los componentes en varios, en un mismo archivo

import { Fragment, ReactNode } from "react"; //usa cuando un componente necesita devolver varios elementos hermanos sin envolverlos en un <div>

//la interface es la forma en la que nosotros queremos que tenga el parametro de el componente de card
interface CardProps {
  //se le indica que su prop es de tipo string
  children: ReactNode; //se le indica que va a ser el hijo y CardBody estara adentro de Card
}

//de esta forma al parametro se le indica su forma
function Card(props: CardProps) {
  //si existieran varias propiedades se pueden llamar una a una
  const { children } = props; //cuando queremos obtener las propiedades del componente se hace esta linea
  const width = {
    //se crea un objeto para poder darle un ancho, este codigo actua como css ya que lo es
    width: "350px",
  };
  return (
    // en esta linea se le pone el objeto, que funciona de una forma para poner css
    <div className="card" style={width}>
      {/* tambien se puede poner adentro {
        width: "350px",
        }*/}
      <div className="card-body">{children}</div>
      {/* se busca donde se quiere utilizar la propiedad*/}
      {/* se puede pasar el card body (<CardBody />) dentro de los div*/}
    </div>
  );
}

//se crearon los props para el titulo y el texto y se les asigna string
interface CardBodyProps {
  title: string;
  text?: string; //? indica que es opcional
}

//se saco el contenido del boby para hacerlo un nuevo componente independiente

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      {/* fragment tambien se puede usar como <>*/}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  );
}
export default Card;
