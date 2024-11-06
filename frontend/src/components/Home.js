import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
export default function Home() {
    return (
        <div>
            <Container fluid>
                <Button color="#ffffff"><Link to="/turno">Turno</Link></Button>
                <Button color="#ffffff"><Link to="/paciente">Paciente</Link></Button>
                <Button color="#ffffff"><Link to="/citas/new">Add Cita</Link></Button>
                <Button color="#ffffff"><Link to="/pacientes/new">Add Paciente</Link></Button>
            </Container>
        </div>
    );

}