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

const AgendaPacientes = (props) => {

  const agendaDoctores = [
    {
      doctor: "Dr. Julian",
      hora: "17:00 hr",
      duracion: "30 min",
      fecha: "10/12/2021",
     
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
        <h2 className="adminTitle">Agenda Paciente</h2>
        <div className="flechaIcon">
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </div>
      <Container>
        <br />
        
        <br /> <br />
        <Table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Hora</th>
              <th>Duracion</th>
              <th>Fecha</th>

            </tr>
          </thead>
          <tbody>
            {agendaDoctores.map((elemento) => (
              <tr>
                <td>{elemento.doctor}</td>
                <td>{elemento.hora}</td>
                <td>{elemento.duracion}</td>
                <td>{elemento.fecha}</td>
                
                <td>
                  <Button color="danger">Cancelar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      
      </div>
    </>
  );
}

export default AgendaPacientes;
