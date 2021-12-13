import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login  from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import CreateNewDoctor from './components/createNewDoctor/createNewDoctor';
import TablaDoctores from './components/listaDoctores/tablaDoctores';
import AgendaPacientes from './components/agendaPaciente/agendaPacientes';
import AgendaDoctores from './components/agendaDoctor/agendaDoctores';
import AgendaCita from './components/agendaCita/agendaCita';
import AgendaCitaMultiple from './components/agendaCitaMultiple/agendaCitaMultiple';
import './App.css';
import {ApolloClient,InMemoryCache, ApolloProvider,useQuery,gql} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const client = new ApolloClient({
  uri: 'https://healthbook-apigateway.herokuapp.com/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/createNewDoctor" element={<CreateNewDoctor/>}/>
          <Route path="/tablaDoctores" element={<TablaDoctores/>}/>
          <Route path="/agendaPacientes" element={<AgendaPacientes/>}/>
          <Route path="/agendaDoctores" element={<AgendaDoctores/>}/>
          <Route path="/agendaCita" element={<AgendaCita/>}/>
          <Route path="/agendaCitaMultiple" element={<AgendaCitaMultiple/>}/>
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
