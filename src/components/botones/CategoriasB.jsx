import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasB() {
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
        <div className="absolute bg-blue-200 mt-1 border border-gray-300 rounded p-2 w-full boton-color z-20">
          <div>
            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/aperitivos"}
            >
              Aperitivos
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/cervezas"}
            >
              Cervezas
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/energizantes"}
            >
              Energizantes
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/espumantes"}
            >
              Espumantes
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/gaseosas"}
            >
              Gaseosas
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/ginebra"}
            >
              Ginebra
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/jugo-agua"}
            >
              Jugo/Agua
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/licores"}
            >
              Licores
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/ron"}
            >
              Ron
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/vinos"}
            >
              Vinos
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/vodka"}
            >
              Vodka
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/bebidas/whisky"}
            >
              Whisky
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
