import { Menu } from "../components/Menu";
import { Link } from "react-router-dom";

export function Alimentos() {
  return (
    <main>
      <Menu />
      <section className="flex flex-col items-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/quento"}
        >
          Quento
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Firenze
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Yerba
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Gallo
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Golosinas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Café
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Aceite
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Mate Cocido/Té
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Jugo Limón
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Leche
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Azúcar
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Harina
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Durazno
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Tomate triturado
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gaseosas"}
        >
          Pulpa Cocktelera
        </Link>
      </section>
    </main>
  );
}
