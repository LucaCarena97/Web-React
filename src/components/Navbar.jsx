import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  return (
    <header className="flex justify-between items-center p-10 ">
      <Logo />

      <button
        className="flex items-center text-white bg-blue-500 border-blue-600 border-2 px-4 py-3 rounded hover:bg-blue-600"
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
