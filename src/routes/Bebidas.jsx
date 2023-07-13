import { Link } from "react-router-dom";
import { Menu } from "../components/botones/Menu";

export function Bebidas() {
  return (
    <main>
      <Menu />
      <section className="flex flex-col items-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Gaseosas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/jugo-agua"}
        >
          Jugo/Agua
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/aperitivos"}
        >
          Aperitivos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/licores"}
        >
          Licores
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/whisky"}
        >
          Whisky
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/cervezas"}
        >
          Cervezas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/energizantes"}
        >
          Energizantes
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/vodka"}
        >
          Vodka
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/ginebra"}
        >
          Ginebra
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/ron"}
        >
          Ron
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/vinos"}
        >
          Vinos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/espumantes"}
        >
          Espumantes
        </Link>
      </section>
    </main>
  );
}
