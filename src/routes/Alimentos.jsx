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
import { BiBowlRice } from "react-icons/bi";
import { BiSolidBowlRice } from "react-icons/bi";
import { LuCandy } from "react-icons/lu";
import { SiGitea } from "react-icons/si";
import { FaCocktail } from "react-icons/fa";
import { MdOutlineSoupKitchen } from "react-icons/md";
// import { PiCookieFill } from "react-icons/pi";
import { GiPickle } from "react-icons/gi";
import { FaJarWheat } from "react-icons/fa6";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { TbSalt } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";

export function Alimentos() {
  return (
    <main className="font-quicksand">
      <section className="ml-5">
        <Menu />
      </section>
      <section className="flex flex-col items-center m-6 gap-2 font-semibold text-lg boton-color animate__animated animate__backInLeft">
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
          className="bg-gray-100 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-300 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/arroz"}
        >
          <BiBowlRice className="mr-2" /> Arroz
        </Link>
        <Link
          className="bg-green-600 border-green-300 border-4 py-2 w-48 rounded hover:bg-green-500 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/alicante"}
        >
          <MdOutlineSoupKitchen className="mr-2" /> Alicante
        </Link>
        <Link
          className="bg-yellow-700 border-yellow-500 border-4 py-2 w-48 rounded hover:bg-yellow-600 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/cafe"}
        >
          <GiCoffeeBeans className="mr-2" /> Café
        </Link>
        <Link
          className="bg-violet-200 border-violet-200-300 border-4 py-2 w-48 rounded hover:bg-violet-300 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/dulcor"}
        >
          <FaJarWheat className="mr-2" /> Dulcor
        </Link>
        <Link
          className="bg-yellow-100 border-yellow-300 border-4 py-2 w-48 rounded hover:bg-yellow-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/durazno"}
        >
          <GiPeach className="mr-2" /> Durazno
        </Link>
        <Link
          className="bg-red-300 border-gray-100 border-4 py-2 w-48 rounded hover:bg-red-400 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/donsatur"}
        >
          <LiaCookieBiteSolid className="mr-2" /> Don Satur
        </Link>
        <Link
          className="bg-gray-100 border-yellow-100 border-4 py-2 w-48 rounded hover:bg-slate-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/fideos"}
        >
          <GiNoodles className="mr-2" /> Fideos
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
        {/* <Link
          className="bg-red-300 border-blue-400 border-4 py-2 w-48 rounded hover:bg-red-400 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/kukinas"}
        >
          <PiCookieFill className="mr-2" /> Kukinas
        </Link> */}

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
          className="bg-green-500 border-red-500 border-4 py-2 w-48 rounded hover:bg-green-400  mb-2 text-center flex items-center justify-center"
          to={"/alimentos/vanoli"}
        >
          <GiPickle className="mr-2" /> Vanoli
        </Link>
        <Link
          className="bg-green-300 border-green-400 border-4 py-2 w-48 rounded hover:bg-green-200 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/yerba"}
        >
          <GiPaperBagFolded className="mr-2" /> Yerba
        </Link>
        <Link
          className="bg-gray-100 border-gray-400 border-4 py-2 w-48 rounded hover:bg-gray-300 mb-2 text-center flex items-center justify-center"
          to={"/alimentos/sal"}
        >
          <TbSalt className="mr-2" /> Sal
        </Link>
      </section>
    </main>
  );
}
