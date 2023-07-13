import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasA() {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);

  const toggleDesplegable = () => {
    setMostrarDesplegable(!mostrarDesplegable);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-5 mt-5"
        onClick={toggleDesplegable}
      >
        Categorias
      </button>
      {mostrarDesplegable && (
        <div className="absolute left-5 bg-white border border-gray-300 rounded p-2 w-30">
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/quento"}
          >
            Quento
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/firenze"}
          >
            Firenze
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/yerba"}
          >
            Yerba
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/gallo"}
          >
            Gallo
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/golosinas"}
          >
            Golosinas
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/cafe"}
          >
            Café
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/aceite"}
          >
            Aceite
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/mate-cocido"}
          >
            Mate Cocido/Té
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/jugo-limon"}
          >
            Jugo Limón
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/leche"}
          >
            Leche
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/azucar"}
          >
            Azucar
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/harina"}
          >
            Harina
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/durazno"}
          >
            Durazno
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/triturado"}
          >
            Tomate Triturado
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/pulpa"}
          >
            Pulpa
          </Link>
        </div>
      )}
    </div>
  );
}