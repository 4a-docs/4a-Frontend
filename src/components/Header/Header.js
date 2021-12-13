import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import "./Header.css";
import Logo from './logo.png'



const Header = () => {
  //La parte "mobile" es para cambiar el header a la versión de moviles
  
  

  return (
    <>
      <header className="HeaderItems">
        <div className="logo-section">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <Link to="/">
            <h1 className="HeaderText">Healt Book</h1>
          </Link>
        </div>

        <ul
          className="HeaderMenu"
          //clickaer los Li devuelve el header a su estado por defecto
        >
          
              
              <li>
                <Link to="/signup">Crear Cuenta</Link>
              </li>
              <li>
                <Link to="/">Iniciar sesión</Link>
              </li>
            
        </ul>
            
      </header>
    </>
  );
};

export default Header;

