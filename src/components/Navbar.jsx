import { FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center p-10 ">
      <p className="font-quicksand text-xl" to="/">
        Bienvenidos!
      </p>
      <button
        className="flex items-center text-white bg-blue-500 border-blue-600 border-2 px-4 py-2 rounded hover:bg-blue-600"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FiSun className="text-xl" />
        ) : (
          <FiMoon className="text-xl" />
        )}
      </button>
    </header>
  );
}
