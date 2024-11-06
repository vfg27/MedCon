import React from 'react';


export default function Login(props) {

    const autenticar=(metodo)=> {
        metodo ? props.aumentarEstado(1):props.aumentarEstado(2);
        console.log(props.estado);
    } 

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <div style={{ textAlign: 'center', paddingBottom:'10%', paddingTop:'2%'}}>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}>BIENVENIDO AL CENTRO DE SALUD DE</h1>
    <p style={{fontSize: '62px', fontStyle: 'normal',
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        CIUDAD UNIVERSITARIA
    </p>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> SELECCIONE UN MÉTODO PARA REGISTRARSE </h1>

    <button onClick={ () => autenticar(true) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}}>TSI</button>    
    <p>
    <button onClick={ () => autenticar(false) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 20, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40, height: 125, width: 360}}>DNI</button>  
    </p>
    </div>
    </div>
}