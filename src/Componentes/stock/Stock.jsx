import { useEffect, useState } from "react";
import "./Stock.css";
import axios from "axios";
const Stock = () => {
  const [buscador, setBuscador] = useState("");
  const [productos, setProductos] = useState([]);
  const [contador, setContador] = useState(1);

  const URL = "http://localhost:5000/api/";

  const showData = async () => {
    let data = "";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL + "articulos",
      headers: {
        Authorization: "Bearer ESTE_ES_EL_TOKEN",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Este el fetch de usuario
    let data2 = JSON.stringify({
      Username: "Vicho",
      Password: "1234",
    });

    let config2 = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL + "login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data2,
    };

    axios
      .request(config2)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const busqueda = (e) => {
    setBuscador(e.target.value);
  };

  const resultado = !buscador
    ? productos
    : productos.filter((dato) =>
        dato.descripcion.toLowerCase().includes(buscador.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  const sumar = () => {
    if (contador < 5) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div
        className="accordion accordion-flush container p-3"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Productos seleccionados
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <table className="table table-hover table-bordered ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-end ">
                <div className="p-4">
                  <button className="btn btn-primary ">Eliminar</button>
                </div>
                <div className="p-4">
                  <button className="btn btn-success ">Guardar Orden</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex flex-row justify-content-center m-4">
            <input
              type="search"
              className="form-control border border-light-subtle w-50"
              id="exampleFormControlInput1"
              placeholder="Buscar Productos"
              value={buscador}
              onChange={busqueda}
            />
          </div>
        </div>
        <div>
          <table className="table table-hover table-bordered ">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="table-group-divider" key={productos.id}>
              {resultado.map((productos) => (
                <tr>
                  <th>{productos.descripcion}</th>
                  <th>${productos.precio}</th>
                  <th>
                    <div className="boton-agregar">
                      <button
                        type="button"
                        className="agregar-boton"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Agregar
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Cantidad:
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="controles">
                    <button onClick={restar}>-</button>
                    <div>{contador}</div>
                    <button onClick={sumar}>+</button>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
