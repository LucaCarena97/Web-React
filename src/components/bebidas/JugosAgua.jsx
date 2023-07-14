import { CategoriasB } from "../botones/CategoriasB";
import { Menu } from "../botones/Menu";
import jugos from "../../json/bebidas/jugos.json";
import { WhatsApp } from "../botones/WhatsApp";

export function JugosAgua() {
  return (
    <>
      <section className="flex justify-evenly items-end">
        <Menu />
        <CategoriasB />
        <WhatsApp />
      </section>

      <section>
        <table className="table-fixed mx-auto mt-5 font-quicksand">
          <tr className="border-4 border-blue-400 text-xl">
            <td className="w-2/5  text-center px-2">
              Descripción de productos
            </td>
            <td className="w-1/5  text-center px-2">Precios</td>
          </tr>
          {jugos.map(function (item) {
            return (
              <tr key={item.id}>
                <td className="w-3/4 px-5 text-lg">{item.producto}</td>
                <td className="w-1/4 px-5 text-right text-lg">
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
