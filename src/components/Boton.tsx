//Mi solución, menciona que el botón se reactiva desde react developer tools
//Muy cuma mi solución
import { useState } from "react";

interface BotonProps {
  initialText: string;
  clickedText: string;
}
function Boton({ initialText, clickedText }: BotonProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(initialText);
  const [disabled, setDisabled] = useState(false);
  const handleClick = (i: number) => {
    setIndex(i + 1);
    setText(clickedText);
    setDisabled(true);
  };

  return (
    <button
      type="button"
      className={index === 0 ? "btn btn-primary" : "btn btn-secondary"}
      onClick={() => handleClick(index)}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Boton;
