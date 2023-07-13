import { Menu } from "./Menu";
import quento from "../json/alimentos/quento.json";
import { CategoriasA } from "./CategoriasA";

export function Quento() {
  return (
    <>
      <section className="flex gap-5">
        <Menu />
        <CategoriasA />
      </section>

      <article>
        <section>
          <table className="table-fixed mx-auto mt-2 bg-green-300 text-lg font-quicksand font-bold">
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
          <table className="table-fixed mx-auto mt-2 text-lg font-quicksand border-2 border-blue-400">
            {quento.map(function (item) {
              return (
                <tr key={item.id}>
                  <td className="w-3/4 px-5 border-2 border-blue-400">
                    {item.producto}
                  </td>
                  <td className="w-1/4 px-5 text-right border-2 border-blue-400">
                    ${item.precio}
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
      </article>
    </>
  );
}
