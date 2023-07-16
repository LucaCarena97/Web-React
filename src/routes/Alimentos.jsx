import { Menu } from "../components/botones/Menu";
import { Link } from "react-router-dom";
import {
  GiSquareBottle,
  GiPowderBag,
  GiCoffeeBeans,
  GiPeach,
  GiCookie,
  GiFlour,
  GiLemon,
  GiMilkCarton,
  GiFrenchFries,
  GiTomato,
  GiPaperBagFolded,
} from "react-icons/gi";
import { BiSolidBowlRice } from "react-icons/bi";
import { LuCandy } from "react-icons/lu";
import { SiGitea } from "react-icons/si";
import { FaCocktail } from "react-icons/fa";

export function Alimentos() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold text-lg boton-color link-transition">
        <Link
          className="bg-yellow-300 border-yellow-400 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/aceite"}
        >
          <GiSquareBottle className="mr-2" /> Aceite
        </Link>
        <Link
          className="bg-red-100 border-yellow-500 border-4 py-2 w-48 rounded hover:bg-red-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/azucar"}
        >
          <GiPowderBag className="mr-2" /> Azúcar
        </Link>
        <Link
          className="bg-yellow-700 border-yellow-500 border-4 py-2 w-48 rounded hover:bg-yellow-600 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/cafe"}
        >
          <GiCoffeeBeans className="mr-2" /> Café
        </Link>
        <Link
          className="bg-yellow-100 border-yellow-300 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/durazno"}
        >
          <GiPeach className="mr-2" /> Durazno
        </Link>
        <Link
          className="bg-red-400 border-red-500 border-4 py-2 w-48 rounded hover:bg-red-300 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/firenze"}
        >
          <GiCookie className="mr-2" /> Firenze
        </Link>

        <Link
          className="bg-red-300 border-green-300 border-4 py-2 w-48 rounded hover:bg-red-400 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/gallo"}
        >
          <BiSolidBowlRice className="mr-2" /> Gallo
        </Link>

        <Link
          className="bg-blue-400 border-blue-500 border-4 py-2 w-48 rounded hover:bg-blue-300 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/golosinas"}
        >
          <LuCandy className="mr-2" /> Golosinas
        </Link>

        <Link
          className="bg-gray-300 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/harina"}
        >
          <GiFlour className="mr-2" /> Harina
        </Link>

        <Link
          className="bg-green-300 border-yellow-300 border-4 py-2 w-48 rounded hover:bg-green-400 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/jugo-limon"}
        >
          <GiLemon className="mr-2" /> Jugo Limón
        </Link>

        <Link
          className="bg-pink-50 border-blue-200 border-4 py-2 w-48 rounded hover:bg-pink-100 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/leche"}
        >
          <GiMilkCarton className="mr-2" />
          Leche
        </Link>

        <Link
          className="bg-green-200 border-green-300 border-4 py-2 w-48 rounded hover:bg-green-100 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/mate-cocido"}
        >
          <SiGitea className="mr-2" /> Mate Cocido/Té
        </Link>
        <Link
          className="bg-pink-300 border-pink-400 border-4 py-2 w-48 rounded hover:bg-pink-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/pulpa"}
        >
          <FaCocktail className="mr-2" /> Pulpa Cocktelera
        </Link>

        <Link
          className="bg-yellow-500 border-yellow-600 border-4 py-2 w-48 rounded hover:bg-yellow-400 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/quento"}
        >
          <GiFrenchFries className="mr-2" /> Quento
        </Link>

        <Link
          className="bg-red-300 border-red-400 border-4 py-2 w-48 rounded hover:bg-red-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/triturado"}
        >
          <GiTomato className="mr-2" /> Tomate triturado
        </Link>
        <Link
          className="bg-green-300 border-green-400 border-4 py-2 w-48 rounded hover:bg-green-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/yerba"}
        >
          <GiPaperBagFolded className="mr-2" /> Yerba
        </Link>
      </section>
    </main>
  );
}
