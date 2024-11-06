import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
//import AppNavbar from './AppNavbar';

export default function Turno(props) {

    const data = [{ name: "Eva Echevarria Leal", motivo: ' Luxación de rodila', horaProgramada: ' Fri Apr 29 19:04:00 CEST 2022', horaInicio: ' Fri Apr 29 19:04:00 CEST 2022', hora_fin_consulta: 'Fri Apr 29 19:04:00 CEST 2022', codigo:'123456', registrada: true, atendida:true, foto: 'mujer.jpg', dni:'12345678A'},
    { name: "Marta Lopez Perez", motivo: ' Luxación de rodila', horaProgramada: ' Fri Apr 29 19:04:00 CEST 2022', horaInicio: ' Fri Apr 29 19:04:00 CEST 2022', hora_fin_consulta: 'Fri Apr 29 19:04:00 CEST 2022', codigo:'123456', registrada: true, atendida:true, foto: 'mujer.jpg', dni:'12345678A'},
    { name: "Jose Manuel Martínez", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: true, atendida:true, foto: 'hombre.webp' },
    { name: "Sergio García López", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: false, atendida:false, foto: 'hombre.webp' },
    { name: "Sara Pérez Garcho", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: true, atendida:false, foto: 'mujer.jpg' }]

    const[emptyItem,setEmptyItem] = useState({
        name: "",
        motivo: "",
        registrada: false,
        atendida: false,
        fechaConsulta: null,
        horaProgramada: null,
        horaInicio: null,
        hora_fin_consulta: null,
        codigo: '',
        salaConsulta: null,
        salaEspera: null,
        dni: '',
        foto:"mujer.jpg"
    });


    const submit = async () => {
        let newObject = emptyItem;
        newObject.name=document.querySelector('#name').value;
        newObject.motivo=document.querySelector('#motivo').value;
        newObject.registrada=document.querySelector('#registrada').checked;
        newObject.atendida=document.querySelector('#atendida').checked;
        newObject.horaProgramada=document.querySelector("#horaProgramada").value;
        newObject.horaInicio=document.querySelector("#hora_inicio").value;
        newObject.hora_fin_consulta=document.querySelector("#hora_fin").value;
        newObject.codigo=document.querySelector("#codigo").value;
        newObject.salaConsulta=document.querySelector("#salaConsulta").value;
        newObject.salaEspera=document.querySelector("#salaEspera").value;
        newObject.dni=document.querySelector("#dni").value;
        setEmptyItem(newObject);

        console.log(emptyItem);
        console.log(JSON.stringify(emptyItem));
        
        await fetch('/citas', {
            method: 'POST', //(item.email) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emptyItem)
            // body: JSON.stringify(data)
            //`{ "registrada": ${emptyItem.registrada}, "atendida": ${emptyItem.atendida},  "fechaConsulta": ${emptyItem.fechaConsulta}, "horaProgramada": ${emptyItem.horaProgramada}, "horaInicio": ${emptyItem.horaInicio}, "hora_fin_consulta": ${emptyItem.hora_fin_consulta}, "codigo": ${emptyItem.codigo}, "salaConsulta": ${emptyItem.salaConsulta}, "salaEspera": ${emptyItem.salaEspera},`,
        });
    };

        return (
        <div>
                <h2>Añadir Cita</h2>
                        <label for="name">Nombre</label>
                        <input type="checkbox" name="name" id="name"/>
                        <br/>
                        <label for="motivo">Motivo</label>
                        <input type="checkbox" name="motivo" id="motivo"/>
                        <br/>
                        <label for="registrada">Registrada</label>
                        <input type="checkbox" name="registrada" id="registrada"/>
                        <br/>
                        <label for="registrada">Registrada</label>
                        <input type="checkbox" name="registrada" id="registrada"/>
                        <br/>
                        <label for="atendida">Atendida</label>
                        <input type="checkbox" name="atendida" id="atendida"/>
                        <br/>
                        <label for="horaProgramada">Hora Programada</label>
                        <input type="datetime-local" name="horaProgramada" id="horaProgramada"/>
                        <br/>
                        <label for="hora_inicio">Hora inicio</label>
                        <input type="datetime-local" name="hora_inicio" id="hora_inicio"/>
                        <br/>
                        <label for="hora_fin">Hora fin</label>
                        <input type="datetime-local" name="hora_fin" id="hora_fin"/>
                        <br/>
                        <label for="codigo">Código</label>
                        <input type="text" name="codigo" id="codigo" maxlength="6"/>
                        <br/>
                        <label for="salaConsulta">Sala Consulta</label>
                        <input type="number" name="salaConsulta" id="salaConsulta"/>
                        <br/>
                        <label for="salaEspera">Sala Espera</label>
                        <input type="number" name="salaEspera" id="salaEspera"/>
                        <br/>
                        <label for="dni">DNI</label>
                        <input type="text" name="dni" id="dni" maxlength="9"/>
                        <br/>
                        <Button color="primary" onClick={submit}>Save</Button>{' '}
                        <Button color="secondary"><Link to="/">Cancel</Link></Button>

        </div>
        )
}