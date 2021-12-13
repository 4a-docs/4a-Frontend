import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import { Link } from "react-router-dom";
import './agendaCita.css'

const AgendaCita = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="contenedor-general-agenda">

    <div className="socaloAdmin">
        <h2 className="adminTitle">Agendar Cita</h2>
        <div className="flechaIcon">
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </div>
      <div className="contenedor-agenda">

       

        <div className="calendarioContenedor">
          <Calendar value={value} onChange={setValue} numberOfMonths={2}  minDate={new Date()}/>
        </div>

        <select className="select-doctor" aria-label="Default select example">
          <option selected hidden>Doctor</option>
          <option value="1">Dr. Juan</option>
          <option value="2">Dr. Pablo</option>
          <option value="3">Dra. Camila</option>
        </select>

        <select className="select-doctor" aria-label="Default select example">
          <option selected hidden>Hora</option>
          <option value="1">12:00 PM</option>
          <option value="2">12:30 PM</option>
          <option value="3">13:00 PM</option>
          <option value="3">13:30 PM</option>
          <option value="3">14:00 PM</option>
          <option value="3">14:30 PM</option>
        </select>
      </div>
    </div>
  );
};
export default AgendaCita;
