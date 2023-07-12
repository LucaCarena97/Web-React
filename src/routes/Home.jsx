import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="border-black border-2">
      <section className="flex flex-col gap-5 items-center border-yellow-300 border-2 m-5">
        <Link
          className="bg-blue-400 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-00 hover:text-white"
          to={"/bebidas"}
        >
          Bebidas
        </Link>
        <Link
          className="bg-blue-400 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/alimentos"}
        >
          Alimentos
        </Link>
        <Link
          className="bg-blue-400 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/higiene"}
        >
          Higiene
        </Link>
        <Link
          className="bg-blue-400 text-center border-2 border-blue-400 w-32 p-1 hover:bg-blue-500 hover:text-white"
          to={"/varios"}
        >
          Varios
        </Link>
      </section>
    </main>
  );
}
