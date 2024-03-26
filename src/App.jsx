import { ReactDOM, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/home/Home.jsx';
import Iniciose from "./Componentes/iniciose/Iniciose.jsx";
import NuevoPresupuesto from "./Componentes/nuevopresupuesto/NuevoPresupuesto.jsx";
import NavBar from "./Componentes/navbar/NavBar.jsx"
import MiCuenta from './Componentes/micuenta/MiCuenta.jsx';
import Stock from './Componentes/stock/Stock.jsx';
import MaybeShowNavBar from './Componentes/MaybeShowNavBar/MaybeShowNavBar.jsx';

import './App.css'




function App() {
  return (
    <BrowserRouter>
    <MaybeShowNavBar>
      <NavBar/>
    </MaybeShowNavBar>
    <Routes>
      <Route path='/' element={<Iniciose/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/nuevoPresupuesto' element={<NuevoPresupuesto/>}/>
       <Route path='/micuenta' element={<MiCuenta/>}/>
       <Route path='/stock' element={<Stock/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

    
