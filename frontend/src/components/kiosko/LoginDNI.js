import React, { useState, useEffect } from 'react';


export default function LoginDNI(props) {
    let codigo = 0;

    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const confirmar= async (metodo)=> {
        if (metodo) {
            if (comprobar() === false){
            alert('DNI invalido');
            return;
            } else {
                let dni = String(document.getElementById('input').value);
                codigo = random(100000, 999999);
                console.log('el codigo aleatorio es :' + codigo.toString())
                await props.fetchUpdateRegistrada("registrada", dni, codigo); //ponemos reg a true
                await props.fetchDataCita(dni);
            }

        }
        metodo ? props.aumentarEstado(3):props.aumentarEstado(0);
    } ;

    const comprobar = () => {
        let respuesta = String(document.getElementById('input').value);
        console.log(respuesta)
        console.log(respuesta.length)
        if (respuesta.length === 9) {
            let ultima = String(respuesta[respuesta.length-1])
            if (esLetra(ultima)){ 
                return true;
            }
        } else {
            return false;
        }
    };
    const esLetra = (caracter) => {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        return ascii > 64 && ascii < 91;
    };

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <div style={{ textAlign: 'center', paddingBottom:'10%', paddingTop:'2%'}}>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> INTRODUZCA SU DNI</h1>
    
     <p>
    <input id="input" style={{width: 400, height: 50,
     padding: 20, marginTop: 20 }} type="text" />
    </p>

    <p>
    <button onClick={() => confirmar(true) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}}>CONFIRMAR</button>  
    </p>  
    <p>
    <button onClick={() => confirmar(false) } style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#D8BD4D' , marginTop: 20, marginRight: 50, marginLeft: 50, borderColor: '#BFA640', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40, height: 125, width: 360}}>VOLVER</button>  
    </p>
    </div>    
    </div>
}
