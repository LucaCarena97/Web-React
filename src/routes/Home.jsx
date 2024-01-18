import { useState, useEffect } from "react";
import { VentanaEmergente } from "../components/VentanaEmergente";
import { Link } from "react-router-dom";
import { BiSolidDrink } from "react-icons/bi";
import { BiSolidCookie } from "react-icons/bi";
import { MdOutlineCleanHands } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

export function Home() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [mostrarVentana, setMostrarVentana] = useState(false);

  const handleAceptarNombre = (nombre) => {
    setNombreUsuario(nombre);
    localStorage.setItem("nombreUsuario", nombre);
    setMostrarVentana(false);
  };

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombreUsuario");

    if (!nombreGuardado) {
      setMostrarVentana(true);
    } else {
      setNombreUsuario(nombreGuardado);
    }
  }, []);
  return (
    <main className="font-quicksand font-semibold text-center text-lg custom-height-80vh">
      <p className="font-quicksand text-3xl select-none custom-scale-animation">
        {nombreUsuario && `¡Bienvenido/a, ${nombreUsuario}!`}
      </p>
      {mostrarVentana && <VentanaEmergente onAceptar={handleAceptarNombre} />}

      {/* NUEVO AGREGADO */}
      {/* <br /> */}
      {/* <div className="flex items-center justify-center">
        <span className="font-quicksand text-2xl select-none text-red-600 flex items-center">
          <TbChristmasTree className="mr-1" /> ¡Felices
        </span>
        <span className="font-quicksand text-2xl select-none text-green-700 flex items-center ml-2">
          Fiestas! <TbChristmasTree className="ml-1" />
        </span>
      </div> */}

      {/* -------------------------------------------------- */}

      <section className="flex flex-col gap-7 items-center p-7 animate__animated animate__zoomInDown mt-2">
        {/* FIESTAS */}
        {/* ------------------------------------- */}

        {/* <Link
          className="bg-green-700 w-40 border-red-600 border-2 text-white py-3 px-4 rounded hover:bg-red-500 flex items-center justify-center"
          to={"/alimentos"}
        >
          <BiSolidCookie className="mr-2" /> Alimentos
        </Link>

        <Link
          className="bg-green-700 w-40 border-red-600 border-2 text-white py-3 px-4 rounded hover:bg-red-500 flex items-center justify-center"
          to={"/bebidas"}
        >
          <BiSolidDrink className="mr-2" /> Bebidas
        </Link>

        <Link
          className="bg-green-700 w-40 border-red-600 border-2 text-white py-3 px-4 rounded hover:bg-red-500 flex items-center justify-center"
          to={"/higiene"}
        >
          <MdOutlineCleanHands className="mr-2" /> Higiene
        </Link>

        <Link
          className="bg-green-700 w-40 border-red-600 border-2 text-white py-3 px-4 rounded hover:bg-red-500 flex items-center justify-center"
          to={"/varios"}
        >
          <BiSolidCategoryAlt className="mr-2" /> Otros
        </Link> */}
        {/* ------------------------------------- */}

        <Link
          className="bg-blue-500 w-40 border-blue-700 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/alimentos"}
        >
          <BiSolidCookie className="mr-2" /> Alimentos
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-700 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/bebidas"}
        >
          <BiSolidDrink className="mr-2" /> Bebidas
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-700 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/higiene"}
        >
          <MdOutlineCleanHands className="mr-2" /> Higiene
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-700 border-2 text-white py-3 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
          to={"/varios"}
        >
          <BiSolidCategoryAlt className="mr-2" /> Otros
        </Link>
      </section>
    </main>
  );
}
