import { useState } from "react";
import { Link } from "react-router-dom";

export function CategoriasB() {
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
        <div className="absolute bg-blue-200  border border-gray-300 rounded p-2 w-30 boton-color ">
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
      )}
    </div>
  );
}
