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

const AgendaDoctores = (props) => {

  const agendaDoctores = [
    {
      paciente: "Julian",
      hora: "12:00 PM",
      duracion: "30 MIN",
      fecha: "15-12-2021",
     
    },
    {
      paciente: "Bruno",
      hora: "2:00 PM",
      duracion: "30 MIN",
      fecha: "15-12-2021",
     
    },
    {
      paciente: "Brayan",
      hora: "10:00 AM",
      duracion: "30 MIN",
      fecha: "15-12-2021",
     
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
        <h2 className="adminTitle">Agenda Doctor</h2>
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
              <th>Paciente</th>
              <th>Hora</th>
              <th>Duracion</th>
              <th>Fecha</th>

            </tr>
          </thead>
          <tbody>
            {agendaDoctores.map((elemento) => (
              <tr>
                <td>{elemento.paciente}</td>
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

export default AgendaDoctores;
