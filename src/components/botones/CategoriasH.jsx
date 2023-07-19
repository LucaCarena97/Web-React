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
        className="bg-blue-500 border-blue-600 border-2 text-white py-2 px-4 rounded hover:bg-blue-600 mt-5"
        onClick={toggleDesplegable}
      >
        Categorias
      </button>
      {mostrarDesplegable && (
        <div className="absolute bg-blue-200 border border-gray-300 rounded p-2 w-30 boton-color  z-20">
          <Link
            className="block py-1 px-2 hover:bg-blue-300 rounded"
            to={"/higiene/cuidado-personal"}
          >
            Cuidado Personal
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-blue-300 rounded"
            to={"/higiene/papel"}
          >
            Rollo/Pañuelos
          </Link>
        </div>
      )}
    </div>
  );
}
