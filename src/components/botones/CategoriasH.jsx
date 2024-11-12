import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasH() {
  const [desplegable, setDesplegable] = useState(false);

  const handleButtonClick = () => {
    setDesplegable(!desplegable);
  };

  return (
    <section className="relative inline-block">
      <button
        data-dropdown-toggle="dropdownDivider"
        className="bg-blue-500 border-blue-600 border-2 text-white py-2 px-4 rounded hover:bg-blue-600 mt-5 flex items-center"
        type="button"
        onClick={handleButtonClick}
      >
        Categorias{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {desplegable && (
        <div className="absolute bg-blue-200 border mt-1 border-gray-300 rounded p-2 w-full boton-color  z-20">
          <Link
            className="block py-2 hover:bg-blue-300 rounded"
            to={"/higiene/cuidado-personal"}
          >
            Cuidado Personal
          </Link>
          <Link
            className="block py-2  hover:bg-blue-300 rounded"
            to={"/higiene/papel"}
          >
            Rollo/Pañuelos
          </Link>
          <Link
            className="block py-2  hover:bg-blue-300 rounded"
            to={"/higiene/limpieza"}
          >
            Limpieza
          </Link>
        </div>
      )}
    </section>
  );
}
