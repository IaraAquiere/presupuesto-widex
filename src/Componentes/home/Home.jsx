import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="table-wrapper">
      <div className="busqueda">
        <input
          className="form-control border border-light-subtle"
          type="text"
          placeholder="Buscar orden"
        />
      </div>
      <div className="tabla-busqueda">
        <table class="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>Nro. Orden</th>
              <th colspan="2">Presupuesto</th>
              <th colSpan="2">Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Nro. Entrega</th>
              <th>Factura</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>1256</td>
              <td colSpan="2">hola como va</td>
              <td colspan="2"> victoria aquiere</td>
              <td>13/07/2023</td>
              <td>Ingresado</td>
              <td>23452</td>
              <td>00000000045</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
