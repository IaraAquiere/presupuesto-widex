import { useState, useEffect } from "react";
import Modal from "../modal/Modal.jsx";
import Boton from "../modal/boton/Boton.jsx";
import axios from "axios";

const NuevoPresupuesto = () => {
  const [buscador, setBuscador] = useState("");
  const [productos, setProductos] = useState([]);

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

  return (
    <>
      <div id="root">
        <div className="d-flex flex-colum align-items-center justify-content-center w-100">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-lg-8 col-md-8 ">
                  <div className="p-4 p-xl-5 my-3 my-xl-4 card">
                    <div className="row">
                      <div className="col">
                        <span className="fw-bold"> Fecha:</span>
                        <input
                          type="date"
                          name="fechadia"
                          required
                          className="form-control "
                        />

                        <span className="fw-bold d-block me-2">Nro.Orden:</span>
                        <input
                          type="number"
                          name="numero"
                          min={1}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <span className="fw-bold me-2">Talonario</span>
                        <select
                          aria-label="change currency"
                          className="light weight-100 my-1 form-select"
                        >
                          <option>Seleccionar Talonario</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>

                    <hr className="my-4" />
                    <div className="mb-5 row">
                      <div className="col">
                        <label className="fw-bolder form-label">
                          Paciente:
                          <Boton />
                          <Modal
                            titulo="Pacientes"
                            placeholder="Buscar Paciente"
                            onChange={buscador}
                          />
                        </label>
                        <input
                          type="text"
                          placeholder="Nombre completo"
                          required
                          row="3"
                          name="paciente"
                          autoComplete="name"
                          className="my-2 form-control"
                        />
                        <input
                          type="number"
                          placeholder="Dni"
                          required
                          row="3"
                          name="dni"
                          autoComplete="dni"
                          className="my-2 form-control"
                        />
                        <input
                          type="text"
                          placeholder="Domicilio"
                          required
                          row="3"
                          name="domicilio"
                          autoComplete="domicilio"
                          className="my-2 form-control"
                        />
                      </div>
                      <div className="col">
                        <label className="fw-bold form-label">
                          Razon social:
                          <Boton />
                          <Modal
                            titulo="Razon Social"
                            placeholder="Buscar por Razon Social"
                            onChange={buscador}
                          />
                        </label>
                        <input
                          placeholder="Nombre"
                          rows="3"
                          name="razonsocial"
                          autoComplete="nombre"
                          required
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Dni"
                          name="razonsocialdni"
                          autoComplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Domicilio"
                          name="razonsocialdomicilio"
                          autoComplete="Domicilio"
                          required
                          type="text"
                          className="my-2 form-control"
                        />
                      </div>
                    </div>
                    <div className="mb-5 row">
                      <div className="col">
                        <label className="fw-bold form-label">
                          Nro. carnet:
                        </label>
                        <input
                          placeholder="Nro.carnet"
                          name="numerocarnet"
                          autoComplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                        <label className="fw-bold form-label">
                          Nro. orden de compra:
                        </label>
                        <input
                          placeholder="Nro.orden de compra"
                          name="nroordencompra"
                          autoComplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                      </div>
                      <div className="col">
                        <div className="p-3">
                          <label className="fw-bold form-label">
                            Orden compra:
                          </label>
                          <input
                            type="file"
                            name="archivo"
                            title="Seleccionar Archivo"
                            id="importData"
                          />
                          <label className="fw-bold form-label">
                            Orden medica:
                          </label>
                          <input
                            type="file"
                            name="archivo"
                            title="Seleccionar Archivo"
                            id="importData"
                          />
                          <label className="fw-bold form-label">
                            Cert.discapacidad:
                          </label>
                          <input
                            type="file"
                            name="archivo"
                            title="Seleccionar Archivo"
                            id="importData"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="fw-bold form-label">Cobertura:</label>
                        <input
                          type="number"
                          placeholder="Cobertura"
                          required
                          row="3"
                          name="cobertura"
                          className="my-2 form-control"
                        />
                        <div className="row">
                          <div className="col">
                            <div className="form-check ">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckIndeterminate"
                              >
                                c/u
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckIndeterminate"
                              >
                                Total
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckIndeterminate"
                              >
                                Discapacidad exento
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <label className="fw-bold form-label">
                          Bonificacion:
                        </label>
                        <input
                          type="number"
                          placeholder="Bonificacion"
                          required
                          row="3"
                          name="cobertura"
                          className="my-2 form-control"
                        />
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                      <div className="col">
                        <label className="fw-bolder form-label">
                          Items:
                          <Boton />
                          <Modal
                            titulo="Productos"
                            placeholder="Buscar Productos"
                            onChange={buscador}
                          />
                        </label>
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
                      </div>
                    </div>
                    <div className="mb-5 row">
                      <div className="col ">
                        <input
                          placeholder="Leyenda 1"
                          name="leyenda"
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Leyenda 2"
                          name="leyenda"
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Leyenda 3"
                          name="leyenda"
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Leyenda 4"
                          name="leyenda"
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Leyenda 5"
                          name="leyenda"
                          type="text"
                          className="my-2 form-control"
                        />
                      </div>
                      <div className="col py-3 ">
                        <div className="d-flex flex-row justify-content-around px-2">
                          <label className="fw-bolder form-label">
                            Sub total:
                          </label>
                          <p className="p-1">0.00</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around px-2">
                          <label className="fw-bolder form-label">
                            Bonificacion:
                          </label>
                          <p className="p-1">0.00</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around px-2">
                          <label className="fw-bolder form-label">
                            Cobertura:
                          </label>
                          <p className="p-1">0.00</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around ">
                          <label className="fw-bolder form-label">Total:</label>
                          <p className="p-1">0.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end ">
                      <div className="p-4">
                        <button className="btn btn-danger ">Cancelar</button>
                      </div>
                      <div className="p-4">
                        <button className="btn btn-success ">Guardar</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div className="sticky-top  pt-xl-4">
                    <input
                      className="form-control border border-light-subtle"
                      type="text"
                      placeholder="Buscar seleccion Widex"
                      data-bs-toggle="modal"
                    />
                    <div className="py-3">
                      <table className="table table-hover table-bordered ">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th colSpan="2">Nombre</th>
                            <th>Comision</th>
                          </tr>
                        </thead>
                        <tbody className="table-group-divider">
                          <tr>
                            <th>1256</th>
                            <td colSpan="2"> victoria aquiere</td>
                            <td>1.32</td>
                          </tr>
                          <tr>
                            <th>2489</th>
                            <td colSpan="2">victoria aquiere</td>
                            <td>2.56</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <input
                      className="form-control border border-light-subtle"
                      type="text"
                      placeholder="Buscar vendedores"
                      data-bs-toggle="modal"
                    />
                    <div className="py-3">
                      <table className="table table-hover table-bordered ">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th colSpan="2">Nombre</th>
                            <th>Comision</th>
                          </tr>
                        </thead>
                        <tbody className="table-group-divider">
                          <tr>
                            <th>1256</th>
                            <td colSpan="2"> victoria aquiere</td>
                            <td>1.32</td>
                          </tr>
                          <tr>
                            <th>2489</th>
                            <td colSpan="2">victoria aquiere</td>
                            <td>2.56</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoPresupuesto;
