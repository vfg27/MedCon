import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

export default function AppsExternas(props) {
    const [clase1, setClase1] = useState("dropdown-menu");
    const [clase2, setClase2] = useState("dropdown-menu");
    const [clase3, setClase3] = useState("dropdown-menu");
    const [clase4, setClase4] = useState("dropdown-menu");
    const [clase5, setClase5] = useState("dropdown-menu");
    return (
        <div>
            <div class="dropdown">
                <button style={{ boxShadow: '0 0 10px 0.05px grey', width: '100%', marginTop:'2%' }} onClick={() => clase1 == "dropdown-menu" ? setClase1('dropdown-menu.show') : setClase1('dropdown-menu')} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font style={{ fontWeight: 'bold', fontSize: '15px' }}> Historias clínicas </font>
                </button>
                <div class={clase1} aria-labelledby="dropdownMenuButton" style={{marginTop: '1%'}}>
                    <a class="dropdown-item" href="#">Historial médico: Operación reciente de apendicitis</a>
                    <a class="dropdown-item" href="#">Medicamentos: Amoxicilina: mañana tarde y noche. 1 comprimido</a>
                    <a class="dropdown-item" href="#">Operaciones pendientes: Ninguna</a>
                </div>
            </div>

            <div class="dropdown">
                <button style={{ boxShadow: '0 0 10px 0.05px grey', width: '100%', marginTop:'2%' }} onClick={() => clase2 == "dropdown-menu" ? setClase2('dropdown-menu.show') : setClase2('dropdown-menu')} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font style={{ fontWeight: 'bold', fontSize: '15px' }}> Pruebas médicas </font>
                </button>
                <div class={clase2} aria-labelledby="dropdownMenuButton" style={{marginTop: '1%'}}>
                    <a class="dropdown-item" href="#">Resonancia de rodilla derecha</a>
                    <a class="dropdown-item" href="#">Ecografía</a>
                    <a class="dropdown-item" href="#">-</a>
                </div>
            </div>

            <div class="dropdown">
                <button style={{ boxShadow: '0 0 10px 0.05px grey', width: '100%', marginTop:'2%' }} onClick={() => clase3 == "dropdown-menu" ? setClase3('dropdown-menu.show') : setClase3('dropdown-menu')} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font style={{ fontWeight: 'bold', fontSize: '15px' }}>Consultas médicas </font>
                </button>
                <div class={clase3} aria-labelledby="dropdownMenuButton" style={{marginTop: '1%'}}>
                    <a class="dropdown-item" href="#">Consulta programada para el 26 de Mayo de 2022 a las 12:30h</a>
                </div>
            </div>

            <div class="dropdown">
                <button style={{ boxShadow: '0 0 10px 0.05px grey', width: '100%', marginTop:'2%' }} onClick={() => clase4 == "dropdown-menu" ? setClase4('dropdown-menu.show') : setClase4('dropdown-menu')} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font style={{ fontWeight: 'bold', fontSize: '15px' }}> Interconsultas </font>
                </button>
                <div class={clase4} aria-labelledby="dropdownMenuButton" style={{marginTop: '1%'}}>
                    <a class="dropdown-item" href="#">Consulta de traumatología programada para el 17 de Mayo de 2022 a las 13:15h</a>
                    <a class="dropdown-item" href="#">Consulta de dermatología programada para el 21 de Mayo de 2022 a las 10:15h</a>
                    <a class="dropdown-item" href="#">Consulta de oftalmología programada para el 30 de Mayo de 2022 a las 14:25h</a>
                </div>
            </div>

            <div class="dropdown">
                <button style={{ boxShadow: '0 0 10px 0.05px grey', width: '100%', marginTop:'2%' }} onClick={() => clase5 == "dropdown-menu" ? setClase5('dropdown-menu.show') : setClase5('dropdown-menu')} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <font style={{ fontWeight: 'bold', fontSize: '15px' }}> Receta médica </font>
                </button>
                <div class={clase5} aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Medicamento: Ibuprofeno </a>
                    <a class="dropdown-item" href="#">Dosis: 600 mg</a>
                    <a class="dropdown-item" href="#">Frecuencia: Cada 8 horas</a>
                </div>
            </div>

        </div>);


}