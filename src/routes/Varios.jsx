import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Varios() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold boton-color ">
        <Link
          className="bg-gray-200 border-gray-400 border-4 text-lg py-2 w-48 rounded hover:bg-gray-100 mb-2 text-center"
          to={"/varios/bolsas"}
        >
          Bolsas Residuos
        </Link>
        <Link
          className="bg-gray-400 border-gray-500 border-4 text-lg py-2 w-48 rounded hover:bg-gray-300 mb-2 text-center"
          to={"/varios/carbon-leña"}
        >
          Carbón/Leña
        </Link>

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center"
          to={"/varios/cigarrillos"}
        >
          Cigarrillos
        </Link>

        <Link
          className="bg-gray-600 border-yellow-500 border-4 text-lg py-2 w-48 rounded hover:bg-gray-700 mb-2 text-center"
          to={"/varios/duracell"}
        >
          Duracell
        </Link>
      </section>
    </main>
  );
}
