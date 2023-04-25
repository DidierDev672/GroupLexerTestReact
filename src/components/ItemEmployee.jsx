import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "../components/Modal";
import { usePutFetch, useDeleteFetch } from "../hooks/useFetch";
import "../styles/employee.css";
import "../styles/modal.css";

const ItemEmployee = ({
  code,
  nif,
  name,
  last_name1,
  last_name2,
  code_section,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    nif: nif,
    name: name,
    last_name1: last_name1,
    last_name2: last_name2,
    code_section: code_section,
  });
  const nifRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const lastName1Ref = React.useRef(null);
  const lastName2Ref = React.useRef(null);
  const codeSectionRef = React.useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleData = () => {
    let data = {
      code: code,
      nif: nifRef.current.value,
      name: nameRef.current.value,
      last_name1: lastName1Ref.current.value,
      last_name2: lastName2Ref.current.value,
      code_section: codeSectionRef.current.value,
    };

    if (
      data.code != "" &&
      data.nif != "" &&
      data.last_name1 != "" &&
      data.last_name2 != "" &&
      data.code_section != ""
    ) {
        usePutFetch({ url: "http://localhost:1234/api/employee", code: data.code, data: data});
        alert("La informacion se almacenado con exito");
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  const handleDelete = () => {
        useDeleteFetch({ url: "http://localhost:1234/api/employee", code: code });
  };

  return (
    <React.Fragment>
      <tr>
        <td>{code}</td>
        <td>{nif}</td>
        <td>{name}</td>
        <td>{last_name1}</td>
        <td>{last_name2}</td>
        <td>{code_section}</td>
        <td>
          <button type="button" className="btn-edit" onClick={openModal}>
            Editar
          </button>
        </td>
        <td>
          <button type="button" className="btn-delete" onClick={handleDelete}>
            Eliminar
          </button>
        </td>
      </tr>
      <Modal isOpen={isOpen} onClose={closeModal} handleData={handleData}>
        <div className="content-model">
          <h2>Datos basicos del empleado</h2>
          <Row className="Row">
            <Col>
              <label>Nif</label>
              <Form.Control
                type="text"
                value={form.nif}
                onChange={(e) => {
                  setForm({ ...form, nif: e.target.value });
                }}
                ref={nifRef}
                placeholder="000-000-000"
              />
            </Col>
          </Row>
          <Row className="Row">
            <Col>
              <label>Nombre</label>
              <Form.Control
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                ref={nameRef}
                placeholder="Luis"
              />
            </Col>
          </Row>
          <Row className="Row">
            <Col>
              <label>Primer apellido</label>
              <Form.Control
                type="text"
                value={form.last_name1}
                onChange={(e) => {
                  setForm({ ...form, last_name1: e.target.value });
                }}
                ref={lastName1Ref}
                placeholder="Alvarez"
              />
            </Col>
          </Row>
          <Row className="Row">
            <Col>
              <label>Segundo apellido</label>
              <Form.Control
                type="text"
                value={form.last_name2}
                onChange={(e) => {
                  setForm({ ...form, last_name2: e.target.value });
                }}
                ref={lastName2Ref}
                placeholder="Gonzalez"
              />
            </Col>
          </Row>
          <Row className="Row">
            <Col>
              <label>Codigo departamental</label>
              <Form.Control
                type="number"
                value={form.code_section}
                onChange={(e) => {
                  setForm({ ...form, code_section: e.target.value });
                }}
                ref={codeSectionRef}
                placeholder="0000"
              />
            </Col>
          </Row>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ItemEmployee;
