import { useState } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  const [desplegable, setDesplegable] = useState(false);

  const handleButtonClick = () => {
    setDesplegable(!desplegable);
  };

  return (
    <section className="relative font-quicksand">
      <button
        className={`bg-blue-500 border-blue-600 border-2 text-white px-4 py-2  rounded hover:bg-blue-600 mt-5 transition-colors duration-300 ease-in-out ${
          desplegable ? "bg-blue-600" : ""
        }`}
        onClick={handleButtonClick}
      >
        ≡
      </button>
      {desplegable && (
        <div className="absolute  bg-blue-200 border mt-1 border-gray-300 rounded p-2  w-30 boton-color z-20">
          <div className="border-b-2 pb-1">
            <Link
              className="block py-1 px-2 hover:bg-blue-300 rounded"
              to={"/"}
            >
              Inicio
            </Link>
          </div>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/alimentos"}
          >
            Alimentos
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/bebidas"}
          >
            Bebidas
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/higiene"}
          >
            Higiene
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/varios"}
          >
            Otros
          </Link>
        </div>
      )}
    </section>
  );
}
