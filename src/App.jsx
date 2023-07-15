import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { Home } from "./routes/Home";
import { Footer } from "./components/Footer";
// IMPORTACIONES BEBIDAS
import { Bebidas } from "./routes/Bebidas";
import { Gaseosas } from "./components/bebidas/Gaseosas";
import { JugosAgua } from "./components/bebidas/JugosAgua";
import { Aperitivos } from "./components/bebidas/Aperitivos";
import { Licores } from "./components/bebidas/Licores";
import { Whisky } from "./components/bebidas/Whisky";
import { Cervezas } from "./components/bebidas/Cervezas";
import { Energizantes } from "./components/bebidas/Energizantes";
import { Vodka } from "./components/bebidas/Vodka";
import { Ginebra } from "./components/bebidas/Ginebra";
import { Ron } from "./components/bebidas/Ron";
import { Vinos } from "./components/bebidas/Vinos";
import { Espumantes } from "./components/bebidas/Espumantes";
// IMPORTACION ALIMENTOS
import { Alimentos } from "./routes/Alimentos";
import { Quento } from "./components/alimentos/Quento";
import { Firenze } from "./components/alimentos/Firenze";
import { Yerba } from "./components/alimentos/Yerba";
import { Gallo } from "./components/alimentos/Gallo";
import { Golosinas } from "./components/alimentos/Golosinas";
import { Cafe } from "./components/alimentos/Cafe";
import { Aceite } from "./components/alimentos/Aceite";
import { MateCocido } from "./components/alimentos/MateCocido";
import { JugoLimon } from "./components/alimentos/JugoLimon";
import { Leche } from "./components/alimentos/Leche";
import { Azucar } from "./components/alimentos/Azucar";
import { Harina } from "./components/alimentos/Harina";
import { Durazno } from "./components/alimentos/Durazno";
import { Triturado } from "./components/alimentos/Triturado";
import { Pulpa } from "./components/alimentos/Pulpa";
// IMPORTACION HIGIENE
import { Higiene } from "./routes/Higiene";
import { Papel } from "./components/higiene/Papel";
import { CuidadoPersonal } from "./components/higiene/CuidadoPersonal";
// IMPORTACION VARIOS
import { Varios } from "./routes/Varios";
import { Duracell } from "./components/varios/Duracell";
import { Cigarrillos } from "./components/varios/Cigarrillos";
import { Carbon } from "./components/varios/Carbon";
import { Bolsas } from "./components/varios/Bolsas";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* BEBIDAS */}
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/bebidas/gaseosas" element={<Gaseosas />} />
        <Route path="/bebidas/jugo-agua" element={<JugosAgua />} />
        <Route path="/bebidas/aperitivos" element={<Aperitivos />} />
        <Route path="/bebidas/licores" element={<Licores />} />
        <Route path="/bebidas/whisky" element={<Whisky />} />
        <Route path="/bebidas/cervezas" element={<Cervezas />} />
        <Route path="/bebidas/energizantes" element={<Energizantes />} />
        <Route path="/bebidas/vodka" element={<Vodka />} />
        <Route path="/bebidas/ginebra" element={<Ginebra />} />
        <Route path="/bebidas/ron" element={<Ron />} />
        <Route path="/bebidas/vinos" element={<Vinos />} />
        <Route path="/bebidas/espumantes" element={<Espumantes />} />
        {/* ALIMENTOS */}
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/alimentos/quento" element={<Quento />} />
        <Route path="/alimentos/firenze" element={<Firenze />} />
        <Route path="/alimentos/yerba" element={<Yerba />} />
        <Route path="/alimentos/gallo" element={<Gallo />} />
        <Route path="/alimentos/golosinas" element={<Golosinas />} />
        <Route path="/alimentos/cafe" element={<Cafe />} />
        <Route path="/alimentos/aceite" element={<Aceite />} />
        <Route path="/alimentos/mate-cocido" element={<MateCocido />} />
        <Route path="/alimentos/jugo-limon" element={<JugoLimon />} />
        <Route path="/alimentos/leche" element={<Leche />} />
        <Route path="/alimentos/azucar" element={<Azucar />} />
        <Route path="/alimentos/harina" element={<Harina />} />
        <Route path="/alimentos/durazno" element={<Durazno />} />
        <Route path="/alimentos/triturado" element={<Triturado />} />
        <Route path="/alimentos/pulpa" element={<Pulpa />} />
        {/* HIGIENE */}
        <Route path="/higiene" element={<Higiene />} />
        <Route path="/higiene/papel" element={<Papel />} />
        <Route path="/higiene/cuidado-personal" element={<CuidadoPersonal />} />
        {/* VARIOS */}
        <Route path="/varios" element={<Varios />} />
        <Route path="/varios/duracell" element={<Duracell />} />
        <Route path="/varios/cigarrillos" element={<Cigarrillos />} />
        <Route path="/varios/carbon-leña" element={<Carbon />} />
        <Route path="/varios/bolsas" element={<Bolsas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button onClick={toggleDarkMode}>Cambiar Modo</button>
      <Footer />
    </>
  );
}

export default App;
