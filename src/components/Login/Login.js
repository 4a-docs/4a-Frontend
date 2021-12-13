import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import eventBus from "../../utils/EventBus";
import { gql, useMutation } from '@apollo/client';
import loginService from "../../services/LoginService";

const PROCESS_LOGIN = gql`
mutation LogIn($credentials: LoginInput) {
  logIn(credentials: $credentials) {
      token
      id
  }
}`;



function Login() {
//------Mutacion--------
  
  const [addLogin, { data, loading, error }] = useMutation(PROCESS_LOGIN,{
    variables: {
      credentials : this?.credentials}
  }
    );

  


//----------- useHistory------------
const history = useNavigate();

//-----------Validacion credenciales Login---------

const [credentials, setCredentials] = useState({ 
  email: "", 
  password: "" 

});


  const handleChange = ({ target }) => {
    setCredentials({
      ...credentials,
  
      [target.name]: target.value,
    });
  };

 console.log(credentials);

//---------preventDefault Login----------
const submitHandler = async (e) => {

  e.preventDefault();
  console.log("envie el form");
  
  
  addLogin({ variables: credentials });
 }
  





  


//----------Render--------

  return (
    <div className="contenedor-general">
      
        <div className="div-form">
          <form className="form"  onSubmit={submitHandler} >
            <h1 className="h1-login">Iniciar Sesión</h1>
             {/* {error !== "" ? <div className="errorDeLogin">{error}</div> : ""}  */}
            <div className="formInputs2">
              <label htmlFor="email" className="formLabel">
                Correo electronico
                <br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="formInput2"
               
                 onChange={handleChange} 
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
                  name="password"
                  className="formInput2"
                  /*  value={data.contrasenia} */
                    onChange={handleChange} 
                ></input>
              </label>

              
            </div>

            <button className="formButtom" type="submit" onSubmit={submitHandler}>
              Ingresar
            </button>
            <span className="spanForm">
              ¿Aún no tienes una cuenta? 
              
              
              
            </span>
          </form>
        </div>
      
    </div>
  );
}


export default Login;