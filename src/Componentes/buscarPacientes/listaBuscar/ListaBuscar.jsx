import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import "./LiataBuscar.css";
import BucarResultado from "../buscarResultado/BucarResultado";
const ListaBuscar = ({ resultado }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="buscar"
          aria-describedby="basic-addon1"
          onClick={handleShow}
        />
      </InputGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buscar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="buscar"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          {" "}
          <select className="resultado-lista" multiple>
            {resultado.map((resultado, id) => {
              return <BucarResultado resultado={resultado} key={id} />;
            })}
          </select>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListaBuscar;
