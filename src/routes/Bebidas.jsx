import { Link } from "react-router-dom";
import bebida from "../json/bebidas/gaseosas.json";

export function Bebidas() {
  return (
    <main>
      <section className="border-red-500 border-2 flex justify-evenly">
        <Link to={"/bebidas"}>Bebidas</Link>
        <Link to={"/alimentos"}>Alimentos</Link>
        <Link to={"/higiene"}>Higiene</Link>
        <Link to={"/varios"}>Varios</Link>
      </section>
      <section className="border-pink-500 border-2 flex items-center justify-center gap-5">
        <span className="border-green-500 border-2 w-2/3 flex justify-center">
          Producto
        </span>
        <span className="border-green-500 border-2 w-1/3 flex justify-center">
          Precio
        </span>
      </section>
      <section>
        <article className="border-blue-500 border-4 flex flex-col  mx-auto gap-1 text-sm">
          {bebida.map(function (item) {
            return (
              <div
                className="border-pink-500 border-2 flex items-center justify-center gap-5"
                key={item.id}
              >
                <span className="border-green-500 border-2 w-2/3 flex justify-start">
                  {item.producto}
                </span>
                <span className="border-green-500 border-2 w-1/3 flex justify-center">
                  ${item.precio}
                </span>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
