import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar';
import LoginCIPA from './LoginCIPA';
import Login from './Login';
import LoginDNI from './LoginDNI';
import Paciente from './../paciente/Paciente';


export default function Kiosko(props) {
    const[estado, setEstado] = useState(0); //hook para saber que componente hay que mostrar: 0 Login, 1 CIPA, 2 DNI y 3 Paciente
    

    const aumentarEstado = (n) => {
        setEstado(parseInt(n))
    }

    const seleccionar = (e) => {

        if (e == 0) {
            return <Login estado = {estado} aumentarEstado={aumentarEstado} />
        }
        else if (e == 1) {
             return <LoginCIPA estado = {estado} aumentarEstado={aumentarEstado} />
        }
        else if (e == 2) {
             return <LoginDNI estado = {estado} aumentarEstado={aumentarEstado}  fetchDataCita={props.fetchDataCita} fetchUpdateRegistrada={props.fetchUpdateRegistrada}/>
         }
        else if (e == 3) {
             return <Paciente fetchDelante={props.fetchDelante} fetchMedicoPorSala={props.fetchMedicoPorSala} estado = {estado} aumentarEstado={aumentarEstado}  cita={props.cita} fetchDataCita={props.fetchDataCita}/>
        }
        else {
            alert('Cambio de estado incorrecto!')
        }
    }

    useEffect(() => {   //traerme los datos del servidor
        setEstado(0);
    }, []);

    useEffect(() => {
        props.fetchRol();
    }, [])

    return props.rol ? <><NavBar />
    <div className=' flex-sm-column' style={{ backgroundColor: '#F4F7F9' }} >
        <div style={{ textAlign: 'center', paddingBottom: '10%', paddingTop: '2%' }}>
            <h1 style={{
                fontSize: '50px', fontStyle: 'normal',
                fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'
            }}> ACCESO NO PERMITIDO </h1>
        </div>
    </div>
</>: (
        <div>
        <NavBar/>
        {seleccionar(estado)}
    </div>
    )
}