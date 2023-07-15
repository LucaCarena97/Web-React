import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";

export function Higiene() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/higiene/cuidado-personal"}
        >
          Cuidado Personal
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 text-lg py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center"
          to={"/higiene/papel"}
        >
          Rollo Papel/Pañuelos
        </Link>
      </section>
    </main>
  );
}
