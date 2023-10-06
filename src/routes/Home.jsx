import { Link } from "react-router-dom";
import { BiSolidDrink } from "react-icons/bi";
import { BiSolidCookie } from "react-icons/bi";
import { MdOutlineCleanHands } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

export function Home() {
  return (
    <main className="font-quicksand font-semibold text-center text-lg custom-height-80vh">
      <p className="font-quicksand text-3xl select-none custom-scale-animation">
        Bienvenidos!
      </p>

      <section className="flex flex-col gap-7 items-center p-7 animate__animated animate__zoomInDown mt-2">
        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/alimentos"}
        >
          <BiSolidCookie className="mr-2" /> Alimentos
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/bebidas"}
        >
          <BiSolidDrink className="mr-2" /> Bebidas
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/higiene"}
        >
          <MdOutlineCleanHands className="mr-2" /> Higiene
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/varios"}
        >
          <BiSolidCategoryAlt className="mr-2" /> Otros
        </Link>
      </section>
    </main>
  );
}
