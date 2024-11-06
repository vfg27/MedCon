import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
//import AppNavbar from './AppNavbar';

export default function Turno(props) {

    const[emptyItem,setEmptyItem] = useState({
        horaInicio: null,
        salaConsulta: null,
        salaEspera: null,
        nombreMedico: null,
        especialidad: null,
        imagenMedico: null,
        username: null
    });


    const submit = async () => {
        let newObject = emptyItem;
        newObject.horaInicio=document.querySelector("#hora_inicio").value;
        newObject.salaConsulta=document.querySelector("#salaConsulta").value;
        newObject.salaEspera=document.querySelector("#salaEspera").value;
        newObject.nombreMedico=document.querySelector("#nombreMedico").value;
        newObject.especialidad=document.querySelector("#especialidad").value;
        newObject.imagenMedico=document.querySelector("#imagenMedico").value;
        newObject.username=document.querySelector("#username").value;
        setEmptyItem(newObject);

        console.log(emptyItem);
        console.log(JSON.stringify(emptyItem));
        
        await fetch('/medicos', {
            method: 'POST', //(item.email) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emptyItem)
            //`{ "registrada": ${emptyItem.registrada}, "atendida": ${emptyItem.atendida},  "fechaConsulta": ${emptyItem.fechaConsulta}, "horaProgramada": ${emptyItem.horaProgramada}, "horaInicio": ${emptyItem.horaInicio}, "hora_fin_consulta": ${emptyItem.hora_fin_consulta}, "codigo": ${emptyItem.codigo}, "salaConsulta": ${emptyItem.salaConsulta}, "salaEspera": ${emptyItem.salaEspera},`,
        });
    };

    
        return (
        <div>
                <h2>Añadir Médico</h2>
                <label for="nombreMedico">Nombre Médico</label>
                        <input type="text" name="nombreMedico" id="nombreMedico"/>
                        <br/>
                        <label for="especialidad">Especialidad</label>
                        <input type="text" name="especialidad" id="especialidad"/>
                        <br/>
                        <label for="hora_inicio">Hora inicio</label>
                        <input type="datetime-local" name="hora_inicio" id="hora_inicio"/>
                        <br/>
                        <label for="salaConsulta">Sala Consulta</label>
                        <input type="number" name="salaConsulta" id="salaConsulta"/>
                        <br/>
                        <label for="salaEspera">Sala Espera</label>
                        <input type="number" name="salaEspera" id="salaEspera"/>
                        <br/>
                        <label for="imagenMedico">Link imagen del médico</label>
                        <input type="text" name="imagenMedico" id="imagenMedico"/>
                        <br/>
                        <label for="username">username</label>
                        <input type="text" name="username" id="username"/>
                        <br/>
                        <Button color="primary" onClick={submit}>Save</Button>{' '}
                        <Button color="secondary"><Link to="/">Cancel</Link></Button>

        </div>
        )
}