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
    <section className="relative font-quicksand">
      <button
        className={`bg-blue-500 border-blue-600 border-2 text-white px-4 py-2  rounded hover:bg-blue-600 mt-5 transition-colors duration-300 ease-in-out ${
          mostrarDesplegable ? "bg-blue-600" : ""
        }`}
        onClick={toggleDesplegable}
      >
        ≡
      </button>
      {mostrarDesplegable && (
        <div className="absolute  bg-blue-200 border border-gray-300 rounded p-2  w-30 boton-color z-20">
          <Link className="block py-1 px-2 hover:bg-blue-300 rounded" to={"/"}>
            Inicio
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/alimentos"}
          >
            Alimentos
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/bebidas"}
          >
            Bebidas
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/higiene"}
          >
            Higiene
          </Link>
          <Link
            className="block py-2 px-2 hover:bg-blue-300 rounded"
            to={"/varios"}
          >
            Otros
          </Link>
        </div>
      )}
    </section>
  );
}
