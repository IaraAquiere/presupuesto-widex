import { Navbar, Nav, Container } from "react-bootstrap";
import { FiUser } from "react-icons/fi";

import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menuData = [
    {
      path: "/",
      name: "Ordenes",
    },
    {
      path: "/nuevoPresupuesto",
      name: "Presupuesto",
    },
    {
      path:"/stock",
      name:"Stock",
    },
  ];
  return (
    <>
      <Navbar className="navbar" expand="lg" bg="light">
        <Container>
          <Navbar.Brand className="brand">
            <NavLink to="/">
              <img
              className="logo"
                src="https://www.widex.com.ar/img/widex-logo.png"
                alt="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuData.map((item) => (
                <Nav.Link href={item.path} key={item.name}>
                  <div className=" item-lista">{item.name}</div>
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="ms-auto">
              <Nav>
              <NavDropdown title="Mi cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item className="activo">En linea <FiUser /> </NavDropdown.Item>
              <NavDropdown.Item className="perfil" href="/micuenta">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login" className="logout">Logout</NavDropdown.Item>
            </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
