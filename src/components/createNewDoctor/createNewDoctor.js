import React from "react";
import { Link } from "react-router-dom";



function createNewDoctor() {



  return (
    <div className="contenedor-general-create">
      <div className="socaloAdmin">
        <h1 className="adminTitle">Crear nuevo doctor</h1>
        <div className="flechaIcon">
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </div>
    <div className="div-form">
      <form className="form" >
        <h1>Crear Nuevo Doctor</h1>
      
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

        <div className="formInputs2">
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

        <button className="formButtom"> Crear Doctor</button>
        <span className="spanForm">      
               
        </span>
      </form>
    </div>
    </div>
  );
}

export default createNewDoctor;