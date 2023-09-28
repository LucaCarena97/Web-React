import { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

export function CategoriasA() {
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
              to={"/alimentos/aceite"}
            >
              Aceite
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/azucar"}
            >
              Azucar
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/alicante"}
            >
              Alicante
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/cafe"}
            >
              Café
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/durazno"}
            >
              Durazno
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/firenze"}
            >
              Firenze
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/gallo"}
            >
              Gallo
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/golosinas"}
            >
              Golosinas
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/harina"}
            >
              Harina
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/jugo-limon"}
            >
              Jugo Limón
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/leche"}
            >
              Leche
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/mate-cocido"}
            >
              Mate Cocido/Té
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/oblita"}
            >
              Oblita
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/pulpa"}
            >
              Pulpa
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/quento"}
            >
              Quento
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/triturado"}
            >
              Tomate Triturado
            </Link>

            <Link
              className="block py-2 px-2 hover:bg-blue-300 rounded"
              to={"/alimentos/yerba"}
            >
              Yerba
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
