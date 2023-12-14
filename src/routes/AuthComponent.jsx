import { useState } from "react";
import { Logo } from "../components/Logo";

export function AuthComponent({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (password === "LNB23") {
      setIsAuthenticated(true);
    } else {
      setErrorMessage("Clave incorrecta");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  return isAuthenticated ? (
    children
  ) : (
    <div className="bg-blue-300 mt-14 p-10 flex items-center justify-center flex-col font-quicksand">
      <Logo />
      <div className="bg-blue-200 p-4 rounded shadow-md text-center mt-10">
        <p className="text-xl mb-4 select-none">¡Bienvenidos!</p>
        <p className="text-base mb-4 select-none">
          Esta página está protegida. <br /> Porfavor ingrese la clave:
        </p>
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Ingrese la clave"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Acceder
        </button>
        {errorMessage && <p className="text-red-600  mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
}
