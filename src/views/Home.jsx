import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ItemEmployee from "../components/ItemEmployee";
import { fetchData } from "../fetchData";

const apiData = fetchData("http://localhost:1234/api/employee");

const Home = () => {
    const data = apiData.read();
    return(
        <React.Fragment>
            <Container>
                <Card>
                    <h4>Bienvenido a "Grupo Lexers"</h4>
                    <Form.Control type="search" placeholder="Ingresar el nif del empleado"/>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nif</th>
                                    <th>Nombre</th>
                                    <th>Primer apellido</th>
                                    <th>Segundo apellido</th>
                                    <th>Codigo departamento</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <React.Suspense fallback={<div> Loading... </div>}>
                                    {data?.map((employee) => (
                                        <ItemEmployee 
                                            key={employee.code}
                                            code={employee.code}
                                            nif={employee.nif}
                                            name={employee.name}
                                            last_name1={employee.last_name1}
                                            last_name2={employee.last_name2}
                                            code_section={employee.code_section}
                                        />
                                    ))}
                                </React.Suspense>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Home;