import { Link } from "react-router-dom";
import { Botones } from "../components/Botones";

export function Bebidas() {
  return (
    <main>
      <Botones />
      <section className="flex justify-center m-5">
        <Link
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          to={"/bebidas/gaseosas"}
        >
          Gaseosas
        </Link>
      </section>
    </main>
  );
}
