import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Alimentos() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold text-lg boton-color">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/aceite"}
        >
          Aceite
        </Link>
        <Link
          className="bg-red-100 border-yellow-500 border-4 py-2 w-48 rounded hover:bg-red-200 mb-2 text-center"
          to={"/alimentos/azucar"}
        >
          Azúcar
        </Link>
        <Link
          className="bg-yellow-700 border-yellow-500 border-4 py-2 w-48 rounded hover:bg-yellow-600 mb-2 text-center"
          to={"/alimentos/cafe"}
        >
          Café
        </Link>
        <Link
          className="bg-yellow-100 border-yellow-300 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/durazno"}
        >
          Durazno
        </Link>
        <Link
          className="bg-red-400 border-red-500 border-4 py-2 w-48 rounded hover:bg-red-300 mb-2 text-center"
          to={"/alimentos/firenze"}
        >
          Firenze
        </Link>

        <Link
          className="bg-red-300 border-green-300 border-4 py-2 w-48 rounded hover:bg-red-400 mb-2 text-center"
          to={"/alimentos/gallo"}
        >
          Gallo
        </Link>

        <Link
          className="bg-blue-400 border-blue-500 border-4 py-2 w-48 rounded hover:bg-blue-300 mb-2 text-center"
          to={"/alimentos/golosinas"}
        >
          Golosinas
        </Link>

        <Link
          className="bg-gray-300 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-200 mb-2 text-center"
          to={"/alimentos/harina"}
        >
          Harina
        </Link>

        <Link
          className="bg-green-300 border-yellow-300 border-4 py-2 w-48 rounded hover:bg-green-400 mb-2 text-center"
          to={"/alimentos/jugo-limon"}
        >
          Jugo Limón
        </Link>

        <Link
          className="bg-pink-50 border-blue-200 border-4 py-2 w-48 rounded hover:bg-pink-100 mb-2 text-center"
          to={"/alimentos/leche"}
        >
          Leche
        </Link>

        <Link
          className="bg-green-200 border-green-300 border-4 py-2 w-48 rounded hover:bg-green-100 mb-2 text-center"
          to={"/alimentos/mate-cocido"}
        >
          Mate Cocido/Té
        </Link>
        <Link
          className="bg-pink-300 border-pink-400 border-4 py-2 w-48 rounded hover:bg-pink-200 mb-2 text-center"
          to={"/alimentos/pulpa"}
        >
          Pulpa Cocktelera
        </Link>

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center"
          to={"/alimentos/quento"}
        >
          Quento
        </Link>

        <Link
          className="bg-red-300 border-red-400 border-4 py-2 w-48 rounded hover:bg-red-200 mb-2 text-center"
          to={"/alimentos/triturado"}
        >
          Tomate triturado
        </Link>
        <Link
          className="bg-green-300 border-green-400 border-4 py-2 w-48 rounded hover:bg-green-200 mb-2 text-center"
          to={"/alimentos/yerba"}
        >
          Yerba
        </Link>
      </section>
    </main>
  );
}
