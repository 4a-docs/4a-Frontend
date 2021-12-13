import React from "react";
import { Link } from "react-router-dom";

import './Signup.css'

function Signup() {



  return (
    <div className="contenedor-general">
    <div className="div-form">
      <form className="form" >
        <h1>Crear Cuenta</h1>
      
        <div className="formInputs">
          <label htmlFor="nombre" className="formLabel">
            Nombre
            <br />
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="formInput"
              
              
            ></input>
           
          </label>
        </div>

        <div className="formInputs">
          <label htmlFor="apellido" className="formLabel">
            Apellido
            <br />
            <input
              id="apellido"
              type="text"
              name="apellido"
              className="formInput"
              
              
            ></input>
            
          </label>
        </div>

        <div className="formInputs">
        <label htmlFor="Tipo documento" className="formLabel">
            Tipo de Documento
            <br />
          <select className="selectDocumento">
              <option value="default" hidden> Seleccione </option>
              <option value="cedula"> Seleccione</option>
              <option value="cedula"> Cedula de ciudadania</option>
          </select>
          </label>
        </div>

        <div className="formInputs">
          <label htmlFor="ciudad" className="formLabel">
            Documento
            <br />
            <input
              id="ciudad"
              type="text"
              name="ciudad"
              className="formInput2"
             
              
            ></input>
          
          </label>
        </div>



        <div className="formInputs">
          <label htmlFor="eps" className="formLabel">
            Eps
            <br />
            <input
              id="Eps"
              type="Eps"
              name="Eps"
              className="formInput"
              
              
            ></input>
            
          </label>
        </div>

        <div className="formInputs">
          <label htmlFor="Fecha de nacimiento" className="dateLabel">
            Fecha de Nacimiento
            <br />
            <input
              id="fecha de nacimiento"
              type="text"
              name="fecha de nacimiento"
              className="formInput"
              
              
            ></input>
            
          </label>
        </div>

        <div className="formInputs2">
          <label htmlFor="Telefono" className="formLabel">
            Telefono
            <br />
            <input
              id="Telefono"
              type="text"
              name="Telefono"
              className="formInput2"
              
              
            ></input>
            
          </label>
        </div>

        <div className="formInputs2">
          <label htmlFor="email" className="formLabel">
            Correo electronico
            <br />
            <input
              id="email"
              type="email"
              name="email"
              className="formInput2"
             
              
            ></input>
           
          </label>
          
        </div>

        <div className="formInputs2">
          <label htmlFor="contrasenia" className="formLabel">
            Contraseña
            <br />
            <input
              id="contrasenia"
              type="password"
              name="contrasenia"
              className="formInput2"
             
              
            ></input>
            
          </label>
          
        </div>

        <div className="formInputs2">
          <label htmlFor="contrasenia2" className="formLabel">
            Confirmar contraseña 
            
            <br />
            
            <input
              id="contrasenia2"
              type="password"
              name="contrasenia2"
              className="formInput2"
              
            ></input>
            
          </label>
        </div>

        <button className="formButtom"> Crear cuenta</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
