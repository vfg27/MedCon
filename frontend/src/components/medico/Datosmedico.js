
import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Datosmedico(props) {

      useEffect( async () => {
        if (props.cola[0]) {
        await props.fetchUpdateRegistrada("atendida", props.cola[0].dni);
        console.log('1. hacemos el post de atendida')
        await props.fetchDataTurno(props.medico.salaEspera); //actualizamos la pantalla de visualizar 
        console.log('2. actualziamos el turno')
        await props.recargarPacientes();
        console.log('3. recargamos pacientes')
        }
      }, [props.cola]);

     const siguiente = async (id, sala) =>{ //la sala de consulta hay que ver como la sacamos (del objeto medico cuando este creado)
        await  props.fetchCola(id, sala); //descargamos la próxima cita pendiente
     }

     const repetir = (cita) =>{ //la sala de consulta hay que ver como la sacamos (del objeto medico cuando este creado)
       props.añadirCitaRepetida(cita); //volver a aparecer la cita en turno
   }

     return  ( 
      
        <Card  style = {{backgroundColor : '#92ACBC',padding:10, borderRadius: 40, marginBottom:20, boxShadow: '0 0 10px 0.05px grey'}}>
            <Card style={{margin: 20, padding: 20 ,borderRadius: 30, boxShadow: '0 0 10px 0.05px grey' }} >
            <div className=' d-flex justify-content-between'>
                <img className="rounded" width='30%' height="auto" src={process.env.PUBLIC_URL + props.medico.imagenMedico}/>
                <div className= 'd-flex flex-column'  >
                <font style={{ marginRight:15,  fontSize: '20px' }}> <b>{props.medico.nombreMedico}</b> </font>
                <font style={{ marginRight:15,fontSize: '20px' }}> {props.medico.especialidad} </font>
                </div>
            </div>
            </Card>
            <div className=' d-flex justify-content-center'  >
            <button onClick={() => siguiente(props.medico.salaEspera, props.medico.salaConsulta)} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 15, marginRight: 50, marginLeft: 50,  fontSize: '15px', fontStyle: 'normal', 
                fontWeight: 400, fontWeight: 'regular', color: 'white', borderRadius: 30,height: 50, width: 200}}>
                SIGUIENTE    
             </button>
              </div>
             <div className=' d-flex justify-content-center'  >
             <button onClick={() => repetir(props.pacientes[2])} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 15, marginRight: 50, marginLeft: 50, fontSize: '15px', fontStyle: 'normal', 
                fontWeight: 400, fontWeight: 'regular', color: 'white', borderRadius: 30,height: 50, width: 200}}>
                REPETIR LLAMADA    
             </button>
             </div> 
             <div className=' d-flex justify-content-center'  >
             <button onClick={()=> props.CambioACancelado()} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#D2A504' , marginTop: 15, marginRight: 50, marginLeft: 50, fontSize: '15px', fontStyle: 'normal', 
                fontWeight: 400, fontWeight: 'regular', color: 'white', borderRadius: 30,height: 50, width: 200}}>
                { props.cancelado ? "VOLVER":"CANCELAR" }
             </button> 
             </div>
           <Card style={{margin: 20, padding: 20 ,borderRadius: 30, boxShadow: '0 0 10px 0.05px grey' }} >
            <div class="d-flex flex-column">
            <font className= 'd-flex justify-content-center' style={{ fontWeight: 400, fontSize: '20px' }}> <b>Pacientes restantes: </b> {props.restantes} </font>
           
            </div></Card> 

            
        </Card>
    
        )
        
    }
 