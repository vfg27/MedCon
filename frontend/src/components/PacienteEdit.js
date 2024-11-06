import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
//import AppNavbar from './AppNavbar';

export default function PacienteEdit(props) {


    //RELLENAR BASE DE DATOS CON PACIENTES ---------------------------------------
    const pacientes = [{ id: '1', name: "Eva Echevarria Leal", motivo: ' Luxación de rodilla', horaProgramada: " 2022-04-29T19:00:00", horaInicio: ' 2022-05-10T10:50:00', hora_fin_consulta: ' 2022-04-29T19:04:00', codigo: '346830', registrada: true, atendida: true, foto: 'mujer.jpg', dni: '12345678A', salaConsulta: '1', salaEspera: '1' },
    { id: '2', name: "Marta López Pérez", motivo: ' Dolor de tripa severo', horaProgramada: ' 2022-04-29T19:10:00', horaInicio: '2022-05-10T10:57:00', hora_fin_consulta: ' 2022-04-29T19:14:00', codigo: '973529', registrada: true, atendida: true, foto: 'mujer-hor2.jpeg', dni: '12345678B', salaConsulta: '1', salaEspera: '1' },
    { id: '3', name: "José García Bernal", motivo: ' Dolor de muelas', horaProgramada: ' 2022-04-29T19:20:00', horaInicio: '2022-05-10T11:05:00', hora_fin_consulta: '', codigo: '763421', registrada: true, atendida: true, foto: 'hombre.webp', dni: '12345678C', salaConsulta: '1', salaEspera: '1' },
    { id: '4', name: "Sergio García López", motivo: ' Problemas respiratorios', horaProgramada: ' 2022-04-29T19:30:00', horaInicio: '', hora_fin_consulta: '', codigo: '462821', registrada: true, atendida: false, foto: 'hombre2.jpeg', dni: '12345678D', salaConsulta: '1', salaEspera: '1' },
    { id: '5', name: "Sara Pérez Garcho", motivo: ' Esguince de tobillo', horaProgramada: ' 2022-04-29T19:40:00', horaInicio: '', hora_fin_consulta: '', codigo: '347812', registrada: true, atendida: false, foto: 'mujer3.jpeg', dni: '12345678E', salaConsulta: '1', salaEspera: '1' },
    { id: '6', name: "Pablo García Pérez", motivo: ' Problemas renales', horaProgramada: ' 2022-04-29T19:50:00', horaInicio: '', hora_fin_consulta: '', codigo: '', registrada: false, atendida: false, foto: 'hombre3.jpeg', dni: '12345678F', salaConsulta: '1', salaEspera: '1' },
    { id: '7', name: "Laura Pérez Martínez", motivo: ' Esguince de rodilla', horaProgramada: ' 2022-04-29T20:00:00', horaInicio: '', hora_fin_consulta: '', codigo: '368133', registrada: true, atendida: false, foto: 'mujer4.webp', dni: '12345678G', salaConsulta: '1', salaEspera: '1' },
    { id: '8', name: "Maria Eugenia Bernal", motivo: ' Luxación de rodilla', horaProgramada: " 2022-04-29T19:00:00", horaInicio: ' 2022-05-10T10:52:00', hora_fin_consulta: ' 2022-04-29T19:04:00', codigo: '874256', registrada: true, atendida: true, foto: 'mujer.jpg', dni: '12345678H', salaConsulta: '2', salaEspera: '1' },
    { id: '9', name: "Julia López Benito", motivo: ' Rotura de escápula', horaProgramada: ' 2022-04-29T19:10:00', horaInicio: '2022-05-10T10:58:00', hora_fin_consulta: ' 2022-04-29T19:14:00', codigo: '098632', registrada: true, atendida: true, foto: 'mujer-hor2.jpeg', dni: '12345678I', salaConsulta: '2', salaEspera: '1' },
    { id: '10', name: "Enrique García Leal", motivo: ' Dolor de muelas', horaProgramada: ' 2022-04-29T19:20:00', horaInicio: '2022-05-10T11:00:00', hora_fin_consulta: '', codigo: '234563', registrada: true, atendida: true, foto: 'hombre3.jpeg', dni: '12345678J', salaConsulta: '2', salaEspera: '1' },
    { id: '11', name: "Jaime López Gallego", motivo: ' Problemas respiratorios', horaProgramada: ' 2022-04-29T19:30:00', horaInicio: '', hora_fin_consulta: '', codigo: '342256', registrada: true, atendida: false, foto: 'hombre4.jpeg', dni: '12345678K', salaConsulta: '2', salaEspera: '1' },
    { id: '12', name: "Sandra Prats Garcho", motivo: ' Esguince de tobillo', horaProgramada: ' 2022-04-29T19:40:00', horaInicio: '', hora_fin_consulta: '', codigo: '236782', registrada: true, atendida: false, foto: 'mujer3.jpeg', dni: '12345678L', salaConsulta: '2', salaEspera: '1' },
    { id: '13', name: "Hugo Sánchez Uria", motivo: ' Problemas renales', horaProgramada: ' 2022-04-29T19:50:00', horaInicio: '', hora_fin_consulta: '', codigo: '236894', registrada: false, atendida: false, foto: 'hombre.webp', dni: '12345678M', salaConsulta: '2', salaEspera: '1' },
    { id: '14', name: "Luis Pérez Ortega", motivo: ' Esguince de rodilla', horaProgramada: ' 2022-04-29T20:00:00', horaInicio: '', hora_fin_consulta: '', codigo: '365784', registrada: true, atendida: false, foto: 'hombre5.webp', dni: '12345678N', salaConsulta: '2', salaEspera: '1' },
    { id: '15', name: "Jesus Pérez Plaza", motivo: ' Esguince de muñeca', horaProgramada: ' 2022-04-29T21:00:00', horaInicio: '', hora_fin_consulta: '', codigo: '', registrada: false, atendida: false, foto: 'hombre2.jpeg', dni: '12345678O', salaConsulta: '2', salaEspera: '1' },
    { id: '16', name: "Marcos Jiménez Ruiz", motivo: ' Dolor abdominal severo', horaProgramada: ' 2022-04-29T22:00:00', horaInicio: '', hora_fin_consulta: '', codigo: '', registrada: false, atendida: false, foto: 'hombre4.jpeg', dni: '12345678P', salaConsulta: '1', salaEspera: '1' }]

    const medicos = [{ id: '1', horaInicio: '', salaConsulta: '1', salaEspera: '1', nombreMedico: 'Juan Rodríguez Pérez', especialidad: 'Medicina general', imagenMedico: 'doctor.png', username: 'Juan' },
    { id: '2', horaInicio: '', salaConsulta: '2', salaEspera: '1', nombreMedico: 'María López Jiménez', especialidad: 'Traumatología', imagenMedico: 'mujer-doctora.png', username: 'Maria' }
    ]

    const submit = async () => {
        pacientes.map(async (cita) => {
            await fetch('/citas', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cita)
            })
            return cita;
        })

        medicos.map(async (medico) => {
            await fetch('/medicos', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medico)
            })
            return medico;
        })
    };


    return (
        <div>
            <Button color="primary" onClick={submit}>Save</Button>{' '}
            <Button color="secondary"><Link to="/">Cancel</Link></Button>
        </div>
    )
}