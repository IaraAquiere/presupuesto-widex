import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Iniciose.css";

const Iniciose = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [registrando, setRegistrando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (registrando) {
      registrar(usuario, contraseña);
    }

    if (usuario == "Vicho") {
      alert("Hola");
      navigate("/");
    }

    e.preventDefault();
  };
  return (
    <div className="todo">
      <div className="wrapper">
        <h1>{registrando ? "Crear cuenta" : "Iniciar sesion"}</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="text-login">
            <p>Usuario</p>
            <input
              type="text"
              placeholder="Nombre de usuario"
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              required
            />
          </div>

          <div className="text-login">
            <p>Contraseña</p>
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
              required
            />
          </div>

          <button className="btn">
            {registrando ? "Crear cuenta" : "Inicia sesion"}
          </button>

          <div className="register-lnk">
            <p>
              {registrando ? "¿Ya tienes una cuenta?" : "No tenes cuenta"}{" "}
              <a className="enlace" href="#" onClick={() => setRegistrando(!registrando)}>
                {registrando ? "Iniciar sesion" : "Registrate aqui"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Iniciose;
