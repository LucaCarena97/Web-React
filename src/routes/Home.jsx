import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="border-black border-2">
      <section className="flex flex-col gap-7 items-center border-yellow-300 border-2 p-7">
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white text-center w-32 py-2 px-4 rounded"
          to={"/alimentos"}
        >
          Alimentos
        </Link>

        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white text-center w-32 py-2 px-4 rounded"
          to={"/bebidas"}
        >
          Bebidas
        </Link>

        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white text-center w-32 py-2 px-4 rounded"
          to={"/higiene"}
        >
          Higiene
        </Link>
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white text-center w-32 py-2 px-4 rounded"
          to={"/varios"}
        >
          Varios
        </Link>
      </section>
    </main>
  );
}
