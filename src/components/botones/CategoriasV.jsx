import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasV() {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);

  const toggleDesplegable = () => {
    setMostrarDesplegable(!mostrarDesplegable);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`bg-blue-500 border-blue-600 border-2 text-white py-2 px-4 rounded hover:bg-blue-600 mt-5 transition-colors duration-300 ease-in-out ${
          mostrarDesplegable ? "bg-blue-600" : ""
        }`}
        onClick={toggleDesplegable}
      >
        Categorías
      </button>
      {mostrarDesplegable && (
        <div className="absolute bg-white border border-gray-300 rounded p-2 w-30 boton-color  z-20">
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/varios/bolsas"}
          >
            Bolsas Residuos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/varios/carbon-leña"}
          >
            Carbón/Leña
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/varios/cigarrillos"}
          >
            Cigarrillos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/varios/duracell"}
          >
            Duracell
          </Link>
        </div>
      )}
    </div>
  );
}
