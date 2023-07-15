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
        className="bg-blue-500 border-blue-600 border-2 text-white py-2 px-4 rounded hover:bg-blue-600 mt-5"
        onClick={toggleDesplegable}
      >
        Categorias
      </button>
      {mostrarDesplegable && (
        <div className="absolute bg-blue-200  border border-gray-300 rounded p-2 w-30">
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
      )}
    </div>
  );
}
