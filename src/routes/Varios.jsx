import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Varios() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/varios/bolsas"}
        >
          Bolsas Residuos
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/varios/carbon-leña"}
        >
          Carbón/Leña
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/varios/cigarrillos"}
        >
          Cigarrillos
        </Link>

        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/varios/duracell"}
        >
          Duracell
        </Link>
      </section>
    </main>
  );
}
