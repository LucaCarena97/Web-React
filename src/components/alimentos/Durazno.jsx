import { Menu } from "../botones/Menu";
import durazno from "../../json/alimentos/durazno.json";
import { CategoriasA } from "../botones/CategoriasA";
import { WhatsApp } from "../botones/WhatsApp";

export function Durazno() {
  return (
    <>
      <section className="flex items-end justify-evenly">
        <Menu />
        <CategoriasA />
        <WhatsApp />
      </section>

      <section>
        <table className="table-fixed mx-auto mt-5 font-quicksand">
          <thead>
            <tr className="border-2 border-blue-400 text-lg">
              <th className="w-2/5 text-center px-2">
                Descripción de productos
              </th>
              <th className="w-1/5 text-center px-2">Precios</th>
            </tr>
          </thead>
          <tbody>
            {durazno.map((item) => (
              <tr key={item.id}>
                <td className="w-3/4 text-base">{item.producto}</td>
                <td className="w-1/4 text-right text-base">${item.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
