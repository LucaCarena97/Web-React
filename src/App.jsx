import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./routes/Home";
import { Alimentos } from "./routes/Alimentos";
import { Bebidas } from "./routes/Bebidas";
import { Higiene } from "./routes/Higiene";
import { Varios } from "./routes/Varios";
import { Footer } from "./components/Footer";
import { Gaseosas } from "./components/Gaseosas";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/bebidas/gaseosas" element={<Gaseosas />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/higiene" element={<Higiene />} />
        <Route path="/varios" element={<Varios />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
