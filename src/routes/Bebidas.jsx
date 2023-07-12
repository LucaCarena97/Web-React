import { Link } from "react-router-dom";
import bebida from "../json/bebidas/gaseosas.json";

export function Bebidas() {
  return (
    <main>
      <section className=" flex justify-evenly p-4 bg-indigo-300">
        <Link
          className="bg-blue-300 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/bebidas"}
        >
          Bebidas
        </Link>
        <Link
          className="bg-blue-300 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/alimentos"}
        >
          Alimentos
        </Link>
        <Link
          className="bg-blue-300 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/higiene"}
        >
          Higiene
        </Link>
        <Link
          className="bg-blue-300 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/varios"}
        >
          Varios
        </Link>
      </section>
      <section className=" flex items-center justify-center bg-pink-400 p-2 text-lg border-pink-500 border-2">
        <span className="flex-1 flex justify-start pl-10">Producto</span>
        <span className="flex-1 flex justify-end pr-10">Precio</span>
      </section>
      <section>
        <article className=" flex flex-col p-5 gap-1 text-sm">
          {bebida.map(function (item) {
            return (
              <div
                className=" flex items-center justify-center gap-5"
                key={item.id}
              >
                <span className="flex-1 flex justify-start">
                  {item.producto}
                </span>
                <span className="flex-1 flex justify-end">${item.precio}</span>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
