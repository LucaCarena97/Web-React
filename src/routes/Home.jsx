import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="font-quicksand font-semibold text-center text-lg custom-height-80vh">
      <section className="flex flex-col gap-7 items-center p-7">
        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600"
          to={"/alimentos"}
        >
          Alimentos
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600"
          to={"/bebidas"}
        >
          Bebidas
        </Link>

        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600"
          to={"/higiene"}
        >
          Higiene
        </Link>
        <Link
          className="bg-blue-500 w-40 border-blue-600 border-2 text-white py-3 px-4 rounded hover:bg-blue-600"
          to={"/varios"}
        >
          Otros
        </Link>
      </section>
    </main>
  );
}
