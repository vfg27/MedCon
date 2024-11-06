import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './turno.css';
import NavBar  from '../NavBar';

export default function Turno(props) {

    const {id} = useParams(); //num sala de espera

    const date = new Date();
    const [dateTime, setDateTime] = useState("");
      useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime(
            date.toString().substr(16,20).substr(0,5)
          );
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    useEffect(() => {
        props.fetchDataTurno(id)
        console.log(props.turnos)
      }, []);

    useEffect(() => {
        setTimeout(function(){
          window.location.reload(1);
          }, 5000);
        console.log('recargada')
      }, []);

      useEffect( async () => {
        if (props.cola[0]) {
        await props.fetchUpdateRegistrada("atendida", props.cola[0].dni);
        props.fetchDataTurno(id); //actualizamos la pantalla de visualizar turno
        }
      }, [props.cola]);

      
      
    const divStyle = {
        display: 'flex',
        alignItems: 'center'
      };

    const siguiente = (id) =>{
        props.fetchCola(id); //descargamos la próxima cita pendiente
    }

    const haceTiempo = [];

    for (var i=0; i < props.turnos.length; i++){
      let fecha = new Date(props.turnos[i].horaInicio);      
      haceTiempo[i] = new Date(date.getTime() - fecha.getTime());
      haceTiempo[i] = haceTiempo[i].getTime()/60000;
      fecha.setHours(fecha.getHours());
      props.turnos[i].horaInicio = fecha;
    }
    
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
</>: ( <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <Card style = {{backgroundColor : '#2C6176', marginBottom: 20}} >
    <div className='d-flex justify-content-around' style={{marginTop: 15}}>
        <div className= 'flex-column'>
            <p style={{color: 'white'}}> Ciudad </p> 
            <p style={{color: 'white'}}> Universitaria </p>
        </div>
        <h1 style={{fontSize: '62px', fontStyle: 'normal',
        fontWeight: 400, fontWeight: 'regular', lineHeight: '64px', color: 'white'}}> SALA DE ESPERA {id} </h1> 
        <p style={{fontSize: '70 px', fontStyle: 'normal',
        fontWeight: 400, fontWeight: 'regular', lineHeight: '64px', color: 'white'}}> {dateTime}</p>
    </div>
    </Card>

    <Card style={{ boxShadow: '0 0 10px 0.05px grey' , marginBottom: 20, marginRight: 10, marginLeft: 10}} className="p-3 mb-2 bg-light text-black">

        <div className='d-flex justify-content-around' style={{fontSize:'bold'}}  >
            <h2 style={{color: '#2C6176' }}>Hora llamada</h2> <h2 style={{color: '#2C6176' }}>ID</h2> <h2 style={{color: '#2C6176' }}>Sala consulta</h2>
            </div>  

            <div className='d-flex justify-content-around' >  
            <h2>{props.turnos[0] ? "HACE " + parseInt(haceTiempo[0]) + " MIN" : "-"}</h2> <h2>{props.turnos[0] ? props.turnos[0].codigo :"-"}</h2> <h2>{props.turnos[0] ? props.turnos[0].salaConsulta :"-"}</h2>
            </div> 
         
    </Card>

    <Card style={{ boxShadow: '0 0 10px 0.05px grey' , marginTop: 15, marginRight: 10, marginLeft: 10}} className="p-3 mb-2 bg-light text-black">
            <div className='d-flex justify-content-around' >  
            <h4>{props.turnos[1] ? "HACE " + parseInt(haceTiempo[1]) + " MIN" : "-"}</h4> <h4>{props.turnos[1] ? props.turnos[1].codigo :"-"}</h4> <h4>{props.turnos[1] ? props.turnos[1].salaConsulta :"-"}</h4>
            </div>  
    </Card>

    <Card style={{ boxShadow: '0 0 10px 0.05px grey', marginTop: 15 , marginRight: 10, marginLeft: 10}} className="p-3 mb-2 bg-light text-black">
        <div className='d-flex justify-content-around' >  
        <h4>{props.turnos[2] ? "HACE " + parseInt(haceTiempo[2]) + " MIN" : "-"}</h4> <h4>{props.turnos[2] ? props.turnos[2].codigo :"-"}</h4> <h4>{props.turnos[2] ? props.turnos[2].salaConsulta :"-"}</h4>
        </div>  
    </Card>

    <Card style={{ boxShadow: '0 0 10px 0.05px grey' , marginTop: 15, marginRight: 10, marginLeft: 10}} className="p-3 mb-2 bg-light text-black">
        <div className='d-flex justify-content-around' >  
        <h4>{props.turnos[3] ? "HACE " + parseInt(haceTiempo[3]) + " MIN" : "-"}</h4> <h4>{props.turnos[3] ? props.turnos[3].codigo :"-"}</h4> <h4>{props.turnos[3] ? props.turnos[3].salaConsulta :"-"}</h4>
        </div>  
    </Card>

    <Card style={{ boxShadow: '0 0 10px 0.05px grey' , marginTop: 15, marginRight: 10, marginLeft: 10}} className="p-3 mb-2 bg-light text-black">
        <div className='d-flex justify-content-around' >  
        <h4>{props.turnos[4] ? "HACE " + parseInt(haceTiempo[4]) + " MIN" : "-"}</h4> <h4>{props.turnos[4] ? props.turnos[4].codigo :"-"}</h4> <h4>{props.turnos[4] ? props.turnos[4].salaConsulta :"-"}</h4>
        </div>  
    </Card>

    <Card style = {{backgroundColor : '#2C6176', marginTop: 15}} >
    <div className='d-flex justify-content-between' style={{marginTop: 15}}>
        <div style={{marginLeft: 15, marginBottom: 10}}>
        <img className="rounded" width="15%" height="auto" src={process.env.PUBLIC_URL + "/logoSanidad.png"}/>
        </div>
        <div style={{marginRight: 15, marginBottom: 10}}>
        <img className="rounded" width="100%" height="auto" src={process.env.PUBLIC_URL + "/logomedcon.jpeg"}/> 
        </div>
    </div>
    </Card>
            
    </div>)
 }
