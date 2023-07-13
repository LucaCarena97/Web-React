import gaseosas from "../json/bebidas/gaseosas.json";
import { Menu } from "./Menu";
import { Categorias } from "./Categorias";

export function Gaseosas() {
  return (
    <>
      <section className="flex gap-5">
        <Menu />
        <Categorias />
      </section>

      <section>
        <table className="table-fixed mx-auto mt-5 font-quicksand">
          <tr className="border-2 border-blue-400 text-xl">
            <td className="w-2/5  text-center px-2">
              Descripción de productos
            </td>
            <td className="w-1/5  text-center px-2">Precios</td>
          </tr>
          {gaseosas.map(function (item) {
            return (
              <tr key={item.id}>
                <td className="w-3/4 px-5 text-base">{item.producto}</td>
                <td className="w-1/4 px-5 text-right text-base">
                  ${item.precio}
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
}
