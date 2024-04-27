import { BiSearchAlt2 } from "react-icons/bi";

const Boton = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-dark m-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <BiSearchAlt2 />
      </button>
    </>
  );
};

export default Boton;
