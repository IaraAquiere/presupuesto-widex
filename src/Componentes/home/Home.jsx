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
        <table className="tabla">
          <thead className="tabla-thead">
            <tr className="tabla-th">
              <th>Codigo</th>
              <th className="expandir">Paciente</th>
              <th>Fecha</th>
              <th className="expandir-sucursal">Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tabla-td">
              <td>02469</td>
              <td>Victoria Aquiere</td>
              <td>24/04</td>
              <td></td>
              <td>
                <span className="actions">
                  <Link className="editar" to="nuevopresupuesto">
                    <MdOutlineEdit size={30} />
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="tabla-td">
              <td>02469</td>
              <td>Yamil Aquiere</td>
              <td>24/04</td>
              <td></td>
              <td>
                <span className="actions">
                  <Link className="editar" to="nuevopresupuesto">
                    <MdOutlineEdit size={30} />
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>

    
  );
};

export default Home;
