import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="text-center p-10 border-blue-500 border-2 font-Quicksand">
      <Link to="/">Bienvenidos!</Link>
    </header>
  );
}
