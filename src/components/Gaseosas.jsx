import gaseosas from "../json/bebidas/gaseosas.json";
import { Botones } from "./Botones";

export function Gaseosas() {
  return (
    <>
      <Botones />

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
          <table className="table-fixed mx-auto mt-2 text-lg font-quicksand">
            {gaseosas.map(function (item) {
              return (
                <tr key={item.id}>
                  <td className="w-3/4 px-5">{item.producto}</td>
                  <td className="w-1/4 px-5 text-right">${item.precio}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </article>
    </>
  );
}
