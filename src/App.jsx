import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ordenes from "./Componentes/ordenes/Ordenes.jsx";
import Login from "./Componentes/login/Login.jsx";
import NuevoPresupuesto from "./Componentes/nuevopresupuesto/NuevoPresupuesto.jsx";
import NavBar from "./Componentes/navbar/NavBar.jsx";
import MiCuenta from "./Componentes/micuenta/MiCuenta.jsx";
import Stock from "./Componentes/stock/Stock.jsx";
import NoNavBar from "./Componentes/noNavBar/NoNavBar.jsx";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
        { 
          <NavBar />
        }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/nuevoPresupuesto" element={<NuevoPresupuesto />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
