const Modal = ({ titulo, seleccionar, onChange, placeholder }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {titulo}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-row justify-content-center m-4">
              <input
                type="search"
                className="form-control border border-light-subtle w-70"
                id="exampleFormControlInput1"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
            <select
              className="form-select"
              multiple
              aria-label="Multiple select example"
            >
              {seleccionar}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
