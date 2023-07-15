import { Link } from "react-router-dom";
import { Menu } from "../components/botones/Menu";

export function Bebidas() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/aperitivos"}
        >
          Aperitivos
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/cervezas"}
        >
          Cervezas
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/energizantes"}
        >
          Energizantes
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/espumantes"}
        >
          Espumantes
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Gaseosas
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/ginebra"}
        >
          Ginebra
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/jugo-agua"}
        >
          Jugo/Agua
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/licores"}
        >
          Licores
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/ron"}
        >
          Ron
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/vinos"}
        >
          Vinos
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/vodka"}
        >
          Vodka
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/bebidas/whisky"}
        >
          Whisky
        </Link>
      </section>
    </main>
  );
}
