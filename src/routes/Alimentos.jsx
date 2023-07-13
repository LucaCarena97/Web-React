import { Menu } from "../components/botones/Menu";
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
          to={"/alimentos/firenze"}
        >
          Firenze
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/yerba"}
        >
          Yerba
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/gallo"}
        >
          Gallo
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/golosinas"}
        >
          Golosinas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/cafe"}
        >
          Café
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/aceite"}
        >
          Aceite
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/mate-cocido"}
        >
          Mate Cocido/Té
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/jugo-limon"}
        >
          Jugo Limón
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/leche"}
        >
          Leche
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/azucar"}
        >
          Azúcar
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/harina"}
        >
          Harina
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/durazno"}
        >
          Durazno
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/triturado"}
        >
          Tomate triturado
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/alimentos/pulpa"}
        >
          Pulpa Cocktelera
        </Link>
      </section>
    </main>
  );
}
