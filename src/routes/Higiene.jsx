import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Higiene() {
  return (
    <main>
      <Menu />
      <section className="flex flex-col items-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/higiene/papel"}
        >
          Rollo Papel/Pañuelos
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-3 w-36 rounded hover:bg-blue-600 mb-2 text-center"
          to={"/higiene/cuidado-personal"}
        >
          Cuidado Personal
        </Link>
      </section>
    </main>
  );
}
