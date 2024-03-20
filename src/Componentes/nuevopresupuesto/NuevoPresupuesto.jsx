

const NuevoPresupuesto = () => {
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
                          <option>12564897561</option>
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
                      <div class="col">
                        <label class="fw-bold form-label">Razon social:</label>
                        <input
                          placeholder="Nombre"
                          rows="3"
                          name="razonsocial"
                          autocomplete="nombre"
                          required
                          type="text"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Dni"
                          name="razonsocialdni"
                          autocomplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                        <input
                          placeholder="Domicilio"
                          name="razonsocialdomicilio"
                          autocomplete="Domicilio"
                          required
                          type="text"
                          className="my-2 form-control"
                        />
                      </div>
                    </div>
                    <div className="mb-5 row">
                      <div class="col">
                        <label class="fw-bold form-label">Nro. carnet:</label>
                        <input
                          placeholder="Nro.carnet"
                          name="numerocarnet"
                          autocomplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                        <label class="fw-bold form-label">
                          Nro. orden de compra:
                        </label>
                        <input
                          placeholder="Nro.orden de compra"
                          name="nroordencompra"
                          autocomplete="number"
                          required
                          type="number"
                          className="my-2 form-control"
                        />
                      </div>
                      <div class="col">
                        <div className="p-3">
                          <label class="fw-bold form-label">
                            Orden compra:
                          </label>
                          <input
                            type="file"
                            name="archivo"
                            title="Seleccionar Archivo"
                            id="importData"
                          />
                          <label class="fw-bold form-label">
                            Orden medica:
                          </label>
                          <input
                            type="file"
                            name="archivo"
                            title="Seleccionar Archivo"
                            id="importData"
                          />
                          <label class="fw-bold form-label">
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
                    <hr className="my-4" />

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
                            <div class="form-check ">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate"
                              >
                                c/u
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckIndeterminate"
                              >
                                Total
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="flexCheckIndeterminate"
                              />
                              <label
                                class="form-check-label"
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
                      <table class="table table-hover table-bordered ">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th colspan="2">Nombre</th>
                            <th>Comision</th>
                          </tr>
                        </thead>
                        <tbody class="table-group-divider">
                          <tr>
                            <th>1256</th>
                            <td colspan="2"> victoria aquiere</td>
                            <td>1.32</td>
                          </tr>
                          <tr>
                            <th>2489</th>
                            <td colspan="2">victoria aquiere</td>
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
                      <table class="table table-hover table-bordered ">
                        <thead>
                          <tr>
                            <th>Codigo</th>
                            <th colspan="2">Nombre</th>
                            <th>Comision</th>
                          </tr>
                        </thead>
                        <tbody class="table-group-divider">
                          <tr>
                            <th>1256</th>
                            <td colspan="2"> victoria aquiere</td>
                            <td>1.32</td>
                          </tr>
                          <tr>
                            <th>2489</th>
                            <td colspan="2">victoria aquiere</td>
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
