import { useState } from "react";

export function VentanaEmergente({ onAceptar }) {
  const [nombre, setNombre] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleAceptar = () => {
    if (nombre.trim() !== "") {
      const nombreCapitalizado =
        nombre.trim().charAt(0).toUpperCase() + nombre.trim().slice(1);

      if (!esNombreOfensivo(nombreCapitalizado)) {
        onAceptar(nombreCapitalizado);
      } else {
        setMensajeError("Coloca un nombre valido");
      }
    } else {
      setMensajeError("Por favor, ingrese un nombre válido.");
    }
  };

  const esNombreOfensivo = (nombre) => {
    const palabrasProhibidas = [
      "tonto",
      "tonta",
      "boludo",
      "puto",
      "puta",
      "idiota",
      "culiado",
      "culiada",
      "boluda",
      "pelotudo",
      "pelotuda",
      "boludos",
      "conchuda",
      "conchudo",
      "imbecil",
      "imbeciles",
      "forro",
      "forra",
      "forros",
    ];

    const nombreEnMinusculas = nombre.toLowerCase();

    return palabrasProhibidas.some((palabra) =>
      nombreEnMinusculas.includes(palabra)
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-8 rounded-md shadow-md border-2 border-blue-500">
        <p className="mb-4 text-lg">Ingrese su nombre:</p>
        <input
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setMensajeError("");
          }}
          className="w-full border p-2 mb-4"
        />
        {mensajeError && (
          <p className="text-red-500 mb-4 text-sm">{mensajeError}</p>
        )}
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
