import { Menu } from "../botones/Menu";
import papel from "../../json/higiene/papel.json";
import { CategoriasH } from "../botones/CategoriasH";
import { WhatsApp } from "../botones/WhatsApp";
import { useState } from "react";

export function Papel() {
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (event) => {
    setBusqueda(event.target.value);
  };

  const filtro = papel.filter((item) =>
    item.producto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="font-quicksand">
      <section className="flex justify-evenly items-end">
        <Menu />
        <CategoriasH />
        <WhatsApp />
      </section>

      <section>
        <div className="flex justify-center mt-7 mb-5">
          <input
            type="text"
            className="border border-gray-400 rounded py-2 px-6 w-8/12 boton-color "
            placeholder="Buscar producto"
            value={busqueda}
            onChange={handleSearch}
          />
        </div>
      </section>

      <section className="flex justify-center">
        <table className="table-fixed mt-5 border-2 border-blue-300">
          <thead>
            <tr className="border-2 border-blue-400 text-lg bg-gray-200 boton-color">
              <th className="w-screen text-center px-2">Productos</th>
              <th className="w-24 text-center px-2">Precios</th>
            </tr>
          </thead>
          <tbody>
            {filtro.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center text-gray-500 p-5">
                  No se encontraron productos.
                </td>
              </tr>
            ) : (
              filtro.map((item, id) => (
                <tr key={id++}>
                  <td className="w-screen text-base border-b border-gray-200 p-1">
                    {item.producto}
                  </td>
                  <td className="w-24 text-right text-base border-b border-gray-200 p-1">
                    ${item.precio}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
