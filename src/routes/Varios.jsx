import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Varios() {
  return (
    <main>
      <Menu />
      <section className="flex flex-col items-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/varios/bolsas"}
        >
          Bolsas Residuos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/varios/carbon-leña"}
        >
          Carbón/Leña
        </Link>

        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/varios/cigarrillos"}
        >
          Cigarrillos
        </Link>

        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/varios/duracell"}
        >
          Duracell
        </Link>
      </section>
    </main>
  );
}
