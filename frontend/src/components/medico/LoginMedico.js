import React, { useState, useEffect } from 'react';


export default function LoginMedico(props) {

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <div style={{ textAlign: 'center', paddingBottom:'10%', paddingTop:'2%'}}>
    <h1  style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> INTRODUZCA SUS CREDENCIALES</h1>
    
    <form name='f' action="login" method='POST'>
     <p>
    <input id="input" style={{width: 400, height: 50,
     padding: 20, marginTop: 20 }} type="text" placeholder='USUARIO'/>
    </p>
    <p>
    <input id="input" style={{width: 400, height: 50,
     padding: 20, marginTop: 20 }} type="text" placeholder='CONTRASEÑA'/>
    </p>

    <p>
    <input name="submit" type="submit" value="CONFIRMAR" style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}}/>
    </p> 
    </form> 
    </div>    
    </div>
}
