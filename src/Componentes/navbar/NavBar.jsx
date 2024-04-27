import { FiUser } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../Store/UseStore";
import "./NavBar.css";
const NavBar = () => {
  const { SetToken, token } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const menuData = [
    {
      path: "/ordenes",
      name: "Ordenes",
    },
    {
      path: "/nuevoPresupuesto",
      name: "Presupuesto",
    },
    {
      path: "/stock",
      name: "Stock",
    },
  ];

  const Logout = () => {
    SetToken("");
    navigate("/");
  };

  return (
      location.pathname === "/" ?   <></> : <>
      <nav className="navbar  p-3">
        <div className="container-fluid">
          <a href="/ordenes">
            <img
              className="logo"
              src="https://www.widex.com.ar/img/widex-logo.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasLightNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end w-10"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Inicio
              </h4>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/ordenes">Ordenes</Link>
                </li>

                <li className="nav-item">
                  <Link to="/nuevoPresupuesto">Presupuesto</Link>
                </li>
                <li className="nav-item">
                  <Link to="/stock">Stock</Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mi cuenta
                  </a>
                  <ul className="dropdown-menu ">
                    <li className="dropdown-item-color">
                      En linea <FiUser />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/micuenta">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={Logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </> 
  );
};

export default NavBar;
