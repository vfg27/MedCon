import NavBar from '../Navbar';
import Salir from './Salir';
import Datosmedico from './Datosmedico';
import Datospaciente from './Datospaciente';
import FichaPaciente from './FichaPaciente';
import AppsExternas from './AppsExternas';
import React, { useState, useEffect } from 'react';


export default function Medico(props) {

    useEffect(() => {
        props.fetchRol();
    }, [])
    
    

    const [paciente_actual, setPaciente_actual] = useState();
    const [pacientes, setPacientes]=useState();
    const [restantes, setRestantes] = useState();

    const [medico_actual, setMedico_actual] = useState();
    const [es_medico, setMedico] = useState(true);

    const [cargando, setCargando] = useState(true);

    const [cancelado, setCancelado]= useState(false);

    const CambioACancelado = ()=> {
         cancelado ? setCancelado(false): setCancelado(true);
    }
    const GetPaciente = (paciente) => {
        setMedico(false);
        setPaciente_actual(paciente);

    }

    const GetMedico = async (username) => {
        let medico = await props.fetchMedicoPorUsername(username);
        console.log('el medico es: ', medico[0]);
        //let fecha = new Date();
        //fecha.setHours(fecha.getHours());
        //medico[0].horaInicio ? console.log('ya tiene fecha de inicio'):medico[0].horaInicio=fecha;
        setMedico_actual(medico[0]);
        console.log(medico_actual)
    }

    const es_medicoTrue = (paciente) => {
        setMedico(true);
    }
    const posiciones = ['ANTERIOR', 'ANTERIOR', 'ACTUAL', 'SIGUIENTE', 'SIGUIENTE'];
    
    useEffect( async () => {
        let username = await props.fetchUsername();
       // let username = "juan";
         GetMedico(username);
     }, []);
     
     useEffect(async ()=> {
        if(medico_actual) {
        await recargarPacientes() }
     }, [medico_actual]
     );

     const recargarPacientes = async () => {
        let primeros= await props.fetchPrimeros(medico_actual.salaConsulta);
        let segundos= await props.fetchSegundos(medico_actual.salaConsulta);
        let concatenado= primeros.concat(segundos);
        setPacientes(concatenado);
        let cuenta = await props.fetchRestantes(medico_actual.salaConsulta);
        setRestantes(cuenta);
     }

     console.log(pacientes)

    return props.rol ? (
        pacientes ?  (
        <div>
            <NavBar />
            <Salir es_medicoTrue={es_medicoTrue} es_medico={es_medico} fetchLogout={props.fetchLogout} />
            <div className=' d-flex flex-row' style={{ backgroundColor: '#F4F7F9', paddingTop: 20 }} >
                <div class="p-2" style={{ width: "30%" }}>
                    {es_medico ? <Datosmedico restantes = {restantes} fetchRestantes={props.fetchRestantes} pacientes={pacientes} añadirCitaRepetida={props.añadirCitaRepetida} recargarPacientes={recargarPacientes} cancelado={cancelado} CambioACancelado={CambioACancelado} GetMedico = {GetMedico} medico = {medico_actual} cola={props.cola} fetchCola={props.fetchCola} fetchUpdateRegistrada={props.fetchUpdateRegistrada} fetchDataTurno={props.fetchDataTurno} fetchMedicoPorUsername={props.fetchMedicoPorUsername} fetchUsername={props.fetchUsername}/> : <FichaPaciente paciente={paciente_actual} />}
                </div>
                <div class="p-2" style={{ width: '70%' }} >
                    {es_medico ?
                        pacientes.map((paciente, index) => {
                          return  <div key={paciente.name}> <Datospaciente index={index} recargarPacientes={recargarPacientes} fetchDeleteCita={props.fetchDeleteCita} cancelado={cancelado} GetPaciente={GetPaciente} paciente={paciente} posicion={posiciones[index]} color={paciente.registrada ? '#BDECB6' : '#FF9688'} presente={paciente.registrada ? 'PRESENTE' : 'NO PRESENTE'} /> </div>
                            }) :
                        <AppsExternas />
                    }
                </div>

            </div>
        </div>) : <div> <NavBar /> <div className='container text-center'><img className='rounded' width="700px" height="700px" src={process.env.PUBLIC_URL + "/rolling.gif"}/></div> </div>
    ) : <><NavBar />
        <div className=' flex-sm-column' style={{ backgroundColor: '#F4F7F9' }} >
            <div style={{ textAlign: 'center', paddingBottom: '10%', paddingTop: '2%' }}>
                <h1 style={{
                    fontSize: '50px', fontStyle: 'normal',
                    fontWeight: 400, fontWeight: 'regular', lineHeight: '50px', color: 'black'
                }}> ACCESO NO PERMITIDO </h1>
            </div>
        </div>
    </>
}
