import React, { useState, useEffect } from 'react';


export default function LoginMedico(props) {

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <div style={{ textAlign: 'center', paddingBottom:'10%', paddingTop:'2%'}}>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> ¿DESEA CERRAR SESIÓN? </h1>

    <p>
    <form action={props.fetchLogout} method="post" >
        <input type="submit" value="CONFIRMAR" style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}} />
    </form>
    </p>  
    </div>    
    </div>
}