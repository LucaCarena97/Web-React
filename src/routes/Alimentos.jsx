import alimento from "../json/alimentos/quento.json";
import { Botones } from "../components/Botones";

export function Alimentos() {
  return (
    <>
      <main>
        <Botones />
        <section className="border-green-500 border-2 flex justify-evenly">
          <p>Producto</p>
          <p>Precio</p>
        </section>
        <section>
          <article className="border-blue-500 border-2 flex flex-col">
            {alimento.map(function (item) {
              return (
                <div
                  className="border-pink-500 border-2 flex justify-evenly"
                  key={item.id}
                >
                  <span>{item.producto}</span>
                  <span>{item.precio}</span>
                </div>
              );
            })}
          </article>
        </section>
      </main>
    </>
  );
}
