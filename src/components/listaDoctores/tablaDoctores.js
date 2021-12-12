import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import './table.css'
import 'bootstrap/dist/css/bootstrap.css';

const TablaDoctores = (props) => {

  const dataDoctores = [
    {
      id: 1,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
    {
      id: 2,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
    {
      id: 3,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
    {
      id: 4,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
    {
      id: 5,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
    {
      id: 6,
      nombre: "Julian",
      apellido: "Mora Angarita",
      documento: "1237712379982",
      correo: "juli@lalala.com",
    },
  ];

  const [data, setData] = useState({
          nombre: "",
          apellido: "",
          documento:"",
          correo:" ",
      });

  const [modalInsertar, setModalInsertar] = useState(false);

  const handleChange = ({target}) =>{
      setData({
          ...data,
      [target.name]: target.value

      });
  };

  const mostrarModalInsertar = () =>{
      setModalInsertar(true)
  }

  const ocultarModalInsertar = () =>{
    setModalInsertar(false)
}

  return (
    <>
     <div className="contenedor-general">
      <div className="socaloAdmin">
        <h2 className="adminTitle">Crear nuevo doctor</h2>
        <div className="flechaIcon">
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </div>
      <Container>
        <br />
        <Button color="info text-white" onClick={mostrarModalInsertar}>Insertar Nuevo Doctor</Button>
        <br /> <br />
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Documento</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {dataDoctores.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.Nombre}</td>
                <td>{elemento.apellido}</td>
                <td>{elemento.documento}</td>
                <td>{elemento.correo}</td>
                <td>
                  <Button color="info text-white">Editar</Button>
                </td>
                <td>
                  <Button color="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal >
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
        <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" value={dataDoctores.length+1} />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" onChange={handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Apellidos:</label>
            <input className="form-control" name="apellido" type="text" onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Documento:</label>
            <input className="form-control" name="documento" type="text" onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Correo:</label>
            <input className="form-control" name="correo" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="info">Editar</Button>
          <Button color="danger" onClick={ocultarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>



      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Doctor</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input className="form-control" readOnly type="text" value={dataDoctores.length+1} />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" onChange={handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Apellidos:</label>
            <input className="form-control" name="apellido" type="text" onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Documento:</label>
            <input className="form-control" name="documento" type="text" onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <label>Correo:</label>
            <input className="form-control" name="correo" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button className="btn btn-danger" onClick={ocultarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
      </div>
    </>
  );
}

export default TablaDoctores;
