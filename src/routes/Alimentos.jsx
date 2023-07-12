import { Link } from "react-router-dom";
import alimento from "../json/alimentos/quento.json";

export function Alimentos() {
  return (
    <>
      <main>
        <section className="border-red-500 border-2 flex justify-evenly">
          <Link to={"/bebidas"}>Bebidas</Link>
          <Link to={"/alimentos"}>Alimentos</Link>
          <Link to={"/higiene"}>Higiene</Link>
          <Link to={"/varios"}>Varios</Link>
        </section>
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
