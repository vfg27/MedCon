import React, { useState, useEffect } from 'react';




export default function Paciente(props) {

    const [medico, setMedico] = useState();
    const [antes, setAntes] = useState();

    const imprimir=()=> {
        props.aumentarEstado(0);
    }

    useEffect( async () => { 
        props.fetchDataCita(props.cita.dni); //mostramos info
        await getMedico(props.cita.salaConsulta);
        await getCola(props.cita.salaConsulta);
    }, []);

   const getMedico = async (salaConsulta) =>{
       let med = await props.fetchMedicoPorSala(salaConsulta);
       console.log('me bajo: ', med);
       setMedico(med);
   }
    
   const getCola = async (salaConsulta) => {
    let anteriores = await props.fetchDelante(salaConsulta);
    console.log('anteriores: ', anteriores)
    const resultado = anteriores.findIndex( ant => ant.horaProgramada === props.cita.horaProgramada );
    console.log('indice: ', resultado)
    setAntes(anteriores.slice( 0, resultado))
    console.log('metemos: ', anteriores.slice(0, resultado ))
}



    return  ( 
    
    <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9', paddingTop: '2%'}} >
        {props.cita ? 
    <div style={{ textAlign: 'center'}}>
        <div className= 'd-flex justify-content-center'>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> SU IDENTIFICADOR ES: &nbsp;</h1>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        {props.cita ? props.cita.codigo:"-"}
    </h1>
        </div>
        <div className= 'd-flex justify-content-center'>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> INFORMACIÓN DE LA CITA: &nbsp;</h1>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        {props.cita ? (medico ? medico[0].nombreMedico:"-"):'-'}
    </h1>
            </div>
            <div className = "d-flex justify-content-around"> 
            <div className= 'd-flex justify-content-center'>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> SALA DE ESPERA:  &nbsp; </h1>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        {props.cita ? props.cita.salaEspera:"-"}
    </h1>
            </div>

            <div className= 'd-flex justify-content-center'>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> SALA DE CONSULTA: &nbsp;</h1>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        {props.cita ? props.cita.salaConsulta:"-"}
    </h1>
            </div>
            </div>

    <div className= 'd-flex justify-content-center'>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'}}> PACIENTES DELANTE DE USTED: &nbsp;</h1>
    <h1  style={{fontSize: '40px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'bold', lineHeight: '64px', color: 'black'}}>
        { props.cita ? (antes ? antes.length:'-'):'-'}
        </h1>
        </div>
    <button onClick ={imprimir} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#2C6176' , marginTop: 35, marginRight: 50, marginLeft: 50, borderColor: '#193E4D', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40,height: 125, width: 360}}>IMPRIMIR</button>    
    <p>
    <button onClick={imprimir} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#D8BD4D' , marginTop: 20, marginRight: 50, marginLeft: 50, borderColor: '#BFA640', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40, height: 125, width: 360}}>VOLVER</button>  
    </p>
    </div>
   
        :<div style={{ textAlign: 'center'}} >
        <h1 style={{fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black', paddingTop: '10%', paddingBottom: '10%'}}> No dispone de una cita, acuda a recepción</h1>
        <p>
        <button onClick={imprimir} style={{boxShadow: '0 0 10px 0.05px grey', backgroundColor: '#D8BD4D' , marginTop: 20, marginRight: 50, marginLeft: 50, borderColor: '#BFA640', fontSize: '50px', fontStyle: 'normal', 
        fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'white', borderRadius: 40, height: 125, width: 360}}>VOLVER</button>  
        </p>        
    </div>}        
    </div> 
    )
}
