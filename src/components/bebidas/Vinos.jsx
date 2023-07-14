import vinos from "../../json/bebidas/vinos.json";
import { Menu } from "../botones/Menu";
import { CategoriasB } from "../botones/CategoriasB";
import { WhatsApp } from "../botones/WhatsApp";

export function Vinos() {
  return (
    <>
      <section className="flex justify-evenly items-end">
        <Menu />
        <CategoriasB />
        <WhatsApp />
      </section>

      <section>
        <table className="table-fixed mx-auto mt-5 font-quicksand">
          <thead>
            <tr className="border-2 border-blue-400 text-xl">
              <th className="w-2/5 text-center px-2">
                Descripción de productos
              </th>
              <th className="w-1/5 text-center px-2">Precios</th>
            </tr>
          </thead>
          <tbody>
            {vinos.map((item) => (
              <tr key={item.id}>
                <td className="w-3/4 px-5 text-base">{item.producto}</td>
                <td className="w-1/4 px-5 text-right text-base">
                  ${item.precio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
