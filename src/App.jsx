import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/home/Home.jsx';
import Iniciose from "./Componentes/iniciose/Iniciose.jsx";
import NuevoPresupuesto from "./Componentes/nuevopresupuesto/NuevoPresupuesto.jsx";
import NavBar from "./Componentes/navbar/NavBar.jsx"



import './App.css'
import MiCuenta from './Componentes/micuenta/MiCuenta.jsx';
import Stock from './Componentes/stock/Stock.jsx';


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Iniciose/>}/>
       <Route path='/nuevoPresupuesto' element={<NuevoPresupuesto/>}/>
       <Route path='/micuenta' element={<MiCuenta/>}/>
       <Route path='/stock' element={<Stock/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

    
