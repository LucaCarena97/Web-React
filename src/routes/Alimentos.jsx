import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Alimentos() {
  return (
    <main className="font-quicksand font-semibold">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-5 ">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/aceite"}
        >
          Aceite
        </Link>
        <Link
          className="bg-red-100 border-yellow-500 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-red-200 mb-2 text-center"
          to={"/alimentos/azucar"}
        >
          Azúcar
        </Link>
        <Link
          className="bg-yellow-800 border-yellow-500 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-700 mb-2 text-center"
          to={"/alimentos/cafe"}
        >
          Café
        </Link>
        <Link
          className="bg-yellow-100 border-yellow-300 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/durazno"}
        >
          Durazno
        </Link>
        <Link
          className="bg-red-400 border-red-500 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-red-300 mb-2 text-center"
          to={"/alimentos/firenze"}
        >
          Firenze
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/gallo"}
        >
          Gallo
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/golosinas"}
        >
          Golosinas
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/harina"}
        >
          Harina
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/jugo-limon"}
        >
          Jugo Limón
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/leche"}
        >
          Leche
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/mate-cocido"}
        >
          Mate Cocido/Té
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/pulpa"}
        >
          Pulpa Cocktelera
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/quento"}
        >
          Quento
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/triturado"}
        >
          Tomate triturado
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 px-3 w-36 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/alimentos/yerba"}
        >
          Yerba
        </Link>
      </section>
    </main>
  );
}
