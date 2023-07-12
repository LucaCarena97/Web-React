import { Link } from "react-router-dom";
import bebida from "../json/bebidas/gaseosas.json";

export function Bebidas() {
  return (
    <main>
      <section className=" flex justify-center gap-10 p-4 bg-indigo-300 border-blue-400 border-2 ">
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

      <section>
        <table className="table-fixed mx-auto mt-2 bg-green-300 text-lg">
          <tr>
            <td className="w-2/5 border-2 border-blue-400 text-center px-2">
              Descripción de productos
            </td>
            <td className="w-1/5 border-2 border-blue-400 text-center px-2">
              Precios
            </td>
          </tr>
        </table>
      </section>

      <section>
        <table className="table-fixed mx-auto mt-2 text-lg font-quicksand">
          {bebida.map(function (item) {
            return (
              <tr key={item.id}>
                <td className="w-3/4 px-5">{item.producto}</td>
                <td className="w-1/4 px-5 text-right">${item.precio}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </main>
  );
}
