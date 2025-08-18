import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";
import { GiCigarette, GiBatteries } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";

export function Varios() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold boton-color animate__animated animate__backInLeft">
        <Link
          className="bg-gray-200 border-gray-400 border-4 text-lg py-2 w-48 rounded hover:bg-gray-100 mb-2 text-center flex items-center justify-center"
          to={"/varios/bolsas"}
        >
          <BsBagFill className="mr-2" /> Bolsas Residuos
        </Link>
        {/* <Link
          className="bg-gray-400 border-gray-500 border-4 text-lg py-2 w-48 rounded hover:bg-gray-300 mb-2 text-center flex items-center justify-center"
          to={"/varios/carbon-leña"}
        >
          <GiFire className="mr-2" /> Carbón/Leña
        </Link> */}

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center flex items-center justify-center"
          to={"/varios/cigarrillos"}
        >
          <GiCigarette className="mr-2" /> Cigarrillos
        </Link>

        <Link
          className="bg-gray-500 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-gray-400 mb-2 text-center flex items-center justify-center"
          to={"/varios/duracell"}
        >
          <GiBatteries className="mr-2" /> Duracell
        </Link>
      </section>
    </main>
  );
}
