import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./BuscarPacientes.css"


const BuscarPacientes = ({ setResultado }) => {
  const [buscar, setBuscar] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const resultado = json.filter((user) => {
          return user && user.name && user.name.toLowerCase().includes(value);
        });
        setResultado(resultado);
      });
  };

  const handleChangeB = (value) => {
    setBuscar(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      
      <FaSearch id="search-icon" />
    </div>
  );
};

export default BuscarPacientes;
