import { Link } from "react-router-dom";
import { Botones } from "../components/Botones";

export function Bebidas() {
  return (
    <main>
      <Botones />
      <section className="flex flex-col items-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Gaseosas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Jugo/Agua
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Aperitivos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Licores
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Whisky
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Cervezas
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Energizantes
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Vodka
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Ginebra
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Ron
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Vinos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/bebidas/gaseosas"}
        >
          Espumantes
        </Link>
      </section>
    </main>
  );
}
