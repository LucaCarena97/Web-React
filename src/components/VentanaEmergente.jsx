import { useState } from "react";

export function VentanaEmergente({ onAceptar }) {
  const [nombre, setNombre] = useState("");

  const handleAceptar = () => {
    if (nombre.trim() !== "") {
      onAceptar(nombre.trim());
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-md shadow-md border-2 border-blue-500">
        <p className="mb-4 text-lg">Ingrese su nombre:</p>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <div className="flex justify-center">
          <button
            onClick={handleAceptar}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
