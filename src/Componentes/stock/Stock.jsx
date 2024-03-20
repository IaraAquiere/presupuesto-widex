

import "./Stock.css";

const Stock = () => {
  return (
    <div>
      <div className="accordion m-4 " id="accordionExample">
        <div className="accordion-item p-2 ">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Productos Seleccionados
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>productos seleccionados</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex flex-row justify-content-center m-4">
            <input
              type="search"
              className="form-control-lg border border-light-subtle w-75"
              id="exampleFormControlInput1"
              placeholder="Buscar Productos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
