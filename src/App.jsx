import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./routes/Home";
import { Footer } from "./components/Footer";
import { NotFound } from "./routes/NotFound";
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
// IMPORTACIONES  ALIMENTOS
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
import { Arroz } from "./components/alimentos/Arroz";
// import { Oblita } from "./components/alimentos/Oblita";
import { Alicante } from "./components/alimentos/Alicante";
// import { Kukinas } from "./components/alimentos/Kukinas";
import { Fideos } from "./components/alimentos/Fideos";
// IMPORTACIONES  HIGIENE
import { Higiene } from "./routes/Higiene";
import { Papel } from "./components/higiene/Papel";
import { CuidadoPersonal } from "./components/higiene/CuidadoPersonal";
import { Limpieza } from "./components/higiene/Limpieza";
// IMPORTACIONES  VARIOS
import { Varios } from "./routes/Varios";
import { Duracell } from "./components/varios/Duracell";
import { Cigarrillos } from "./components/varios/Cigarrillos";
// import { Carbon } from "./components/varios/Carbon";
import { Bolsas } from "./components/varios/Bolsas";
import { ToastContainer } from "react-toastify";
// import { AuthComponent } from "./routes/AuthComponent";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "tailwindcss/tailwind.css";
import { Sal } from "./components/alimentos/Sal";
import { Dulcor } from "./components/alimentos/Dulcor";
import { DonSatur } from "./components/alimentos/DonSatur";
import { Vanoli } from "./components/alimentos/Vanoli";

function App() {
  return (
    <>
      {/* <AuthComponent> */}
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
        <Route path="/alimentos/vanoli" element={<Vanoli />} />
        <Route path="/alimentos/alicante" element={<Alicante />} />
        {/* <Route path="/alimentos/kukinas" element={<Kukinas />} /> */}
        <Route path="/alimentos/sal" element={<Sal />} />
        <Route path="/alimentos/dulcor" element={<Dulcor />} />
        <Route path="/alimentos/donsatur" element={<DonSatur />} />
        <Route path="/alimentos/arroz" element={<Arroz />} />
        <Route path="/alimentos/fideos" element={<Fideos />} />
        {/* HIGIENE */}
        <Route path="/higiene" element={<Higiene />} />
        <Route path="/higiene/papel" element={<Papel />} />
        <Route path="/higiene/cuidado-personal" element={<CuidadoPersonal />} />
        <Route path="/higiene/limpieza" element={<Limpieza />} />
        {/* VARIOS */}
        <Route path="/varios" element={<Varios />} />
        <Route path="/varios/duracell" element={<Duracell />} />
        <Route path="/varios/cigarrillos" element={<Cigarrillos />} />
        {/* <Route path="/varios/carbon-leña" element={<Carbon />} /> */}
        <Route path="/varios/bolsas" element={<Bolsas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
      {/* </AuthComponent> */}
    </>
  );
}

export default App;
