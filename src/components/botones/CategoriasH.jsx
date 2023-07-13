import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasH() {
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
            to={"/higiene/papel"}
          >
            Rollo/Pañuelos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/higiene/cuidado-personal"}
          >
            Cuidado Personal
          </Link>
        </div>
      )}
    </div>
  );
}
