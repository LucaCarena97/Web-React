import { Link } from "react-router-dom";
import { Menu } from "../components/botones/Menu";
import { PiBeerBottleFill } from "react-icons/pi";
import { FaWineBottle, FaWineGlassAlt, FaGlassWhiskey } from "react-icons/fa";
import {
  GiSodaCan,
  GiBottleCap,
  GiGlassShot,
  GiBeerBottle,
} from "react-icons/gi";
import { PiChampagneFill, PiWineFill } from "react-icons/pi";
import { TbBottleFilled } from "react-icons/tb";
import { FaBottleDroplet } from "react-icons/fa6";

export function Bebidas() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold text-lg boton-color animate__animated animate__backInLeft">
        <Link
          className="bg-blue-300 border-blue-400 border-4 py-2 w-48 rounded hover:bg-blue-200 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/aperitivos"}
        >
          <FaWineBottle className="mr-2" /> Aperitivos
        </Link>
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/cervezas"}
        >
          <PiBeerBottleFill className="mr-2" /> Cervezas
        </Link>
        <Link
          className="bg-gray-500 border-red-500 border-4 py-2 w-48 rounded hover:bg-gray-400 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/energizantes"}
        >
          <GiSodaCan className="mr-2" /> Energizantes
        </Link>

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/espumantes"}
        >
          <PiChampagneFill className="mr-2" /> Espumantes
        </Link>

        <Link
          className="bg-red-300 border-red-400 border-4 py-2 w-48 rounded hover:bg-red-200 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/gaseosas"}
        >
          <GiBottleCap className="mr-2" /> Gaseosas
        </Link>
        <Link
          className="bg-gray-100 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-50 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/ginebra"}
        >
          <PiWineFill className="mr-2" /> Ginebra
        </Link>

        <Link
          className="bg-green-300 border-green-400 border-4 py-2 w-48 rounded hover:bg-green-200 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/jugo-agua"}
        >
          <TbBottleFilled className="mr-2" /> Jugo/Agua
        </Link>

        <Link
          className="bg-yellow-600 border-yellow-700 border-4 py-2 w-48 rounded hover:bg-yellow-500 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/licores"}
        >
          <GiBeerBottle className="mr-2" /> Licores
        </Link>

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/ron"}
        >
          <GiGlassShot className="mr-2" /> Ron
        </Link>

        <Link
          className="bg-red-800 border-red-900 border-4 py-2 w-48 rounded hover:bg-red-700 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/vinos"}
        >
          <FaWineGlassAlt className="mr-2" /> Vinos
        </Link>
        <Link
          className="bg-gray-100 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-50 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/vodka"}
        >
          <FaBottleDroplet className="mr-2" /> Vodka
        </Link>

        <Link
          className="bg-yellow-600 border-yellow-700 border-4 py-2 w-48 rounded hover:bg-yellow-500 mb-2 text-center flex items-center justify-center"
          to={"/bebidas/whisky"}
        >
          <FaGlassWhiskey className="mr-2" /> Whisky
        </Link>
      </section>
    </main>
  );
}
