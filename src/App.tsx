import { useState } from "react";
import Button from "./components/Button";
import { CardBody } from "./components/Card";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  //Mi solución
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(["Rodrigo", "Joaquín"]);
  const handleClick = () => setIsLoading(!isLoading);
  const handleAdd = () => setList([...list, "Minion"]);
  const handleDelete = () => setList(list.slice(0, -1));

  //const list: string[] = ["Rodrigo", "Joaquín"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  //const handleSelect2 = (elemento: string) => {
  //  console.log("mostrando", elemento);
  //};

  //Si el largo de la lista es > 0, entonces mostraré el componente
  //Si no quiero mostrar nada debo utilizar el short circuit operator (&&)

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  //Importante mantener la plantilla limpia, idealmente crear una variable con la condición
  //**Depende de todas maneras del tamaño de la operación, si es pequeño puede agregarse en la plantilla */
  return (
    <Card>
      <Button onClick={handleAdd}>Agregar</Button>
      <Button onClick={handleDelete}>Eliminar</Button>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}

      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
