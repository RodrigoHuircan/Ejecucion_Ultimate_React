import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button = ({ children, isLoading, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"} me-1 mb-1`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
