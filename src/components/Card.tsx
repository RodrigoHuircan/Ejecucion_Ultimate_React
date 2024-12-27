import { ReactNode } from "react";

interface Props {
  children: ReactNode; //Tiene que si o si llamarse children, con otro nombre se cae
}

function Card(props: Props) {
  // const width = {
  //   width: "350px",
  // };

  const { children } = props;
  return (
    <div className="card container mt-4" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string; //Símbolo de ? significa opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
