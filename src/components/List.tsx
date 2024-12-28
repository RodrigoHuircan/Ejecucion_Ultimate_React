import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void; //No retorna nada
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1); //Hook es una funcionalidad ya incluida en react
  //El primer elemento del array es la variable que vamos a cambiar, la funcion SET es la que cambia la variable
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento); //Si es que on select se encuentra definida, hay que pasarla
  };
  return (
    <ul className="list-group mb-4">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={i}
          className={`list-group-item ${index == i ? "active" : ""} `}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

//Es necesario agregar una key a los elementos de la lista, react lo exige
//Es necesario usar hooks como use statate para que react gestione cambios en el dom

export default List;
