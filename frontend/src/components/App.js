import React, { useState, useEffect} from 'react';
import { Container, Button} from 'react-bootstrap';
import './../App.css';
import Turno from './turno/Turno';
import Kiosko from './kiosko/Kiosko';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" 
import CitaEdit from './CitaEdit';
import PacienteEdit from './PacienteEdit';
import Medico from './medico/Medico.js';
import MedicoEdit from './MedicoEdit.js'
import Login from './medico/LoginMedico'
import Salir from './medico/Salir';



export default function App() {

  const [cita, setCita] = useState();

  const[turnos, setTurnos]=useState([]);
  const[cola, setCola]=useState([]);
  const[rol, setRol]=useState(false);

  async function fetchDataCita(dni) {
    try{
      const res = await fetch("https://localhost:8083/paciente/"+dni);
      const myjson = await res.json();
      setCita(myjson);
    } catch(e) {
      console.log(e)
    }
    }

    async function fetchRol() {
      try{
        const res = await fetch("https://localhost:8083/userclass");
        const myjson = await res.json();
        setRol(myjson);
      } catch(e) {
        console.log(e)
      }
      }

        async function fetchLogin() {
          try{
            const res = await fetch("https://localhost:8083/login");
            const myjson = await res.json();
            
          } catch(e) {
            console.log(e)
          }
          }

    const fetchUpdateRegistrada = async (registrada, dni, codigo) => {

      await fetch('/paciente/'+ registrada + '/' + dni + '/' + codigo, { 
          method: 'PUT'
      });
  };

    async function fetchDataTurno(id) {
      try{
        const res = await fetch("https://localhost:8083/sala/"+id);
        const myjson = await res.json();

        setTurnos(myjson);
      } catch(e) {
        console.log(e)
      }
      }

      async function fetchCola(id, sala) {
        try{
          const res = await fetch("https://localhost:8083/cola/"+id + "/" + sala);
          const myjson = await res.json();
          
        
          setCola(myjson);
        } catch(e) {
          console.log(e)
        }
        }

      async function fetchMedicoPorUsername(username) {
        const res = await fetch("https://localhost:8083/medicos/username/"+ username);
        const myjson = await res.json();
        
        return myjson;
        
      }

      async function fetchUsername() {
        const res = await fetch("https://localhost:8083/username");
        const myjson = await res.text();
        return myjson;
      }
      
      async function fetchPrimeros(salaConsulta) {
        try{
        const res = await fetch("https://localhost:8083/lista/primeros/" + salaConsulta);
        const myjson = await res.json();
        if (myjson.length > 3){
          let slicedArray = myjson.slice( myjson.length -3, myjson.length); 
          return slicedArray;
        }
        return myjson;
      } catch (e) {
        console.log(e)
      } 
      }
      
      async function fetchSegundos(salaConsulta) {
        try{
        const res = await fetch("https://localhost:8083/lista/segundos/" + salaConsulta);
        const myjson = await res.json();
        if (myjson.length > 2){
         let slicedArray = myjson.slice( 0, 2 ); 
         return slicedArray;
        }
        return myjson;
      } catch (e) {
        console.log(e)
      }
        
      }

      const añadirCitaRepetida = (cita) => {
        console.log("turnos: ", turnos)
         let turnoCopia = JSON.parse(JSON.stringify(turnos));
         console.log("antes de cambiar",turnoCopia);
         turnoCopia.unshift(cita);
         console.log("despues de cambiar", turnoCopia);
         setTurnos(turnoCopia);
      }


      async function fetchRestantes(salaConsulta) {
        try{
        const res = await fetch("https://localhost:8083/lista/segundos/" + salaConsulta);
        const myjson = await res.json();
        return myjson.length;
      } catch(e) {
        console.log(e);
      }
      }

      const fetchDeleteCita = async (dni) => {

        await fetch('/cita/eliminar/' + dni, { 
            method: 'DELETE'
        });
    };

    async function fetchMedicoPorSala(salaConsulta) {
      try{
      const res = await fetch("https://localhost:8083/medicos/" + salaConsulta);
      const myjson = await res.json();
      return myjson;
    } catch(e) {
      console.log(e);
    }
    }

    async function fetchDelante(salaConsulta) {
      try{
      const res = await fetch("https://localhost:8083/lista/segundos/" + salaConsulta);
      const myjson = await res.json();
      return myjson;
    } catch (e) {
      console.log(e)
    }
      
    }

  return (
    
    <div className="applicacion">
        {/* {<div>
            <Container fluid>
                <Link to="/turno" crossorigin="use-credentials">Turno</Link> ||
                <Link to="/paciente" crossorigin="use-credentials">Paciente</Link> ||
                <Link to="/citas/new" crossorigin="use-credentials">Add cita</Link> ||
                <Link to="/paciente/new" crossorigin="use-credentials">Add paciente</Link> ||
                <Link to="/medicos/new" crossorigin="use-credentials">Add médico</Link> ||
                <Link to="/medico" crossorigin="use-credentials">Médico</Link>
            </Container>
        </div>} */}
      <div>
        <Routes>
        <Route path="/turno/:id" element={<Turno rol={rol} fetchRol={fetchRol} fetchDataTurno={fetchDataTurno} turnos={turnos} cola={cola} fetchUpdateRegistrada={fetchUpdateRegistrada} fetchCola={fetchCola}/>} />
        <Route path="/paciente" element={<Kiosko fetchDelante={fetchDelante} fetchMedicoPorSala={fetchMedicoPorSala} rol={rol} fetchRol={fetchRol} fetchDataCita={fetchDataCita} cita={cita} fetchUpdateRegistrada={fetchUpdateRegistrada} />} />
        <Route path="/citas/new" element={<CitaEdit />} />
        <Route path="/paciente/new" element={<PacienteEdit />} />
        <Route path="/medicos/new" element={<MedicoEdit />} />
        <Route path="/medico" element={<Medico fetchRestantes={fetchRestantes} fetchDeleteCita={fetchDeleteCita} añadirCitaRepetida={añadirCitaRepetida} fetchSegundos={fetchSegundos} fetchPrimeros={fetchPrimeros} rol={rol} fetchRol={fetchRol} cola={cola} fetchCola={fetchCola} fetchUpdateRegistrada={fetchUpdateRegistrada} fetchDataTurno={fetchDataTurno} fetchUsername={fetchUsername} fetchMedicoPorUsername={fetchMedicoPorUsername} />} />
        </Routes>
      </div>
    </div>
  );
}


