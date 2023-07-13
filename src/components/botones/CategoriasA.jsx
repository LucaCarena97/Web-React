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
            Jugo/Agua
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/yerba"}
          >
            Aperitivos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/gallo"}
          >
            Licores
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/golosinas"}
          >
            Whisky
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/cafe"}
          >
            Cervezas
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/aceite"}
          >
            Energizantes
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/mate-cocido"}
          >
            Vodka
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/jugo-limon"}
          >
            Ginebra
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/leche"}
          >
            Ron
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/azucar"}
          >
            Vinos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/harina"}
          >
            Espumantes
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/durazno"}
          >
            Espumantes
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/triturado"}
          >
            Espumantes
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos/pulpa"}
          >
            Espumantes
          </Link>
        </div>
      )}
    </div>
  );
}
