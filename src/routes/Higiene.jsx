import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";
import { FaToiletPaper } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";

export function Higiene() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold boton-color animate__animated animate__backInLeft">
        <Link
          className="bg-green-200 border-green-300 border-4 text-lg py-2 w-48 rounded hover:bg-green-100 mb-2 text-center flex items-center justify-center"
          to={"/higiene/cuidado-personal"}
        >
          <MdBathroom className="mr-2" /> Cuidado Personal
        </Link>
        <Link
          className="bg-gray-200 border-gray-400 border-4 text-lg py-2 w-48 rounded hover:bg-gray-100 mb-2 text-center flex items-center justify-center"
          to={"/higiene/papel"}
        >
          <FaToiletPaper className="mr-2" /> Papel/Pañuelos
        </Link>
        <Link
          className="bg-blue-300 border-blue-400 border-4 text-lg py-2 w-48 rounded hover:bg-blue-200 mb-2 text-center flex items-center justify-center"
          to={"/higiene/limpieza"}
        >
          <MdCleaningServices className="mr-2" /> Limpieza
        </Link>
      </section>
    </main>
  );
}
