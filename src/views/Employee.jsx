import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Validate from "../hooks/validate";
import { usePostFetch } from "../hooks/useFetch";
import "../styles/employee.css";

const Employee = () => {
    const nifRef = React.useRef(null);
    const nameRef = React.useRef(null);
    const lastName1Ref = React.useRef(null);
    const lastName2Ref = React.useRef(null);
    const codeSectionRef = React.useRef(null);

    const handleSave = () => {
        let data = {
            code: Validate.generator_code(),
            nif: nifRef.current.value,
            name: nameRef.current.value,
            last_name1: lastName1Ref.current.value,
            last_name2: lastName2Ref.current.value,
            code_section: codeSectionRef.current.value, 
        };

        if(data.code != "" && data.nif != "" && data.name != "" && data.last_name1 != "" && data.last_name2 != "" && data.code_section != ""){
            usePostFetch({url: "http://localhost:1234/api/employee", data: data });
            nifRef.current.value = "";
            nameRef.current.value = "";
            lastName1Ref.current.value = "";
            lastName2Ref.current.value = "";
            codeSectionRef.current.value = "";
        }else {
            alert("Debe llenar todos los campos ");
        }
    };
    return(
        <React.Fragment>
            <Container>
                <Card>
                    <h4>Datos basicos de los empleados</h4>
                    <Card.Body>
                            <Row>
                                <Col>
                                    <label>Nif</label>
                                    <Form.Control type="text" ref={nifRef} placeholder="000-000-000"  className="text-field"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Nombre</label>
                                    <Form.Control type="text" ref={nameRef} placeholder="Luis" className="text-field"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Primer apellido</label>
                                    <Form.Control type="text" ref={lastName1Ref} placeholder="Alvarez" className="text-field"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Segundo apellido</label>
                                    <Form.Control type="text" ref={lastName2Ref} placeholder="Gonzalez" className="text-field"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>Codigo departamental</label>
                                    <Form.Control type="number" ref={codeSectionRef} placeholder="0000" className="text-field"/>
                                </Col>
                            </Row>
                            <br />
                            <button type="button" className="btn-save" onClick={handleSave}> Registrar </button>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Employee;