import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';


export default function LoginCIPA(props) {

    const confirmar=(metodo)=> {
        metodo ? props.aumentarEstado(3):props.aumentarEstado(0);
    } 

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <div style={{ textAlign: 'center', paddingBottom:'15%', paddingTop:'2%'}}>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> INTRODUZCA SU TARJETA </h1>
    <p style={{fontSize: '50px', fontStyle: 'normal',
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> SANITARIA EN LA RANURA </p>

    <button onClick={() => confirmar(true) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}}>CONFIRMAR</button>    
    <p>
    <button onClick={() => confirmar(false) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#D8BD4D' , marginTop: 20, marginRight: 50, marginLeft: 50, borderColor: '#BFA640', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40, height: 125, width: 360}}>VOLVER</button>  
    </p>
    </div>
   
            
    </div>
}
