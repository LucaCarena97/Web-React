import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);

  useEffect(() => {
    const cerrarDesplegable = () => {
      setMostrarDesplegable(false);
    };

    // Agrega un event listener para cerrar el desplegable cuando se hace clic fuera de él
    document.addEventListener("click", cerrarDesplegable);

    return () => {
      document.removeEventListener("click", cerrarDesplegable);
    };
  }, []);

  const toggleDesplegable = (e) => {
    e.stopPropagation();
    setMostrarDesplegable(!mostrarDesplegable);
  };

  return (
    <section className="relative">
      <button
        className="bg-blue-500 text-white py-2 px-4  rounded hover:bg-blue-600 mt-5 "
        onClick={toggleDesplegable}
      >
        ≡
      </button>
      {mostrarDesplegable && (
        <div className="absolute  bg-white border border-gray-300 rounded p-2 w-30">
          <Link className="block py-1 px-2 hover:bg-gray-200 rounded" to={"/"}>
            Inicio
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/bebidas"}
          >
            Bebidas
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/alimentos"}
          >
            Alimentos
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/higiene"}
          >
            Higiene
          </Link>
          <Link
            className="block py-1 px-2 hover:bg-gray-200 rounded"
            to={"/varios"}
          >
            Varios
          </Link>
        </div>
      )}
    </section>
  );
}
