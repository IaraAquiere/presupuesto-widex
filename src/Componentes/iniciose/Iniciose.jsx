import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Iniciose.css";

const Iniciose = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (usuario == "Vicho") {
      alert("Hola");
      navigate("/home");
    }

    e.preventDefault();
  };
  return (
    <div className="todo">
      <div className="wrapper">
        <h1>Iniciar sesion</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-login">
            <p>Usuario</p>
            <input
              type="text"
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              required
            />
          </div>

          <div className="text-login">
            <p>Contraseña</p>
            <input
              type="password"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
              required
            />
          </div>
          <div class="d-grid gap-8 col-8 mx-auto">
            <div className="me-md-16 mt-4">
              <a className="enlace-button" href="/home">
                <button type="button" class="btn btn-dark btn-lg">
                  Iniciar sesion
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Iniciose;
