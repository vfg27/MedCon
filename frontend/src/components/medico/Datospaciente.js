
import { Card } from 'react-bootstrap';



export default function Datospaciente(props) {

    const borrarCita = async (dni) => {
        await props.fetchDeleteCita(dni);
        await props.recargarPacientes();
    }

    if (props.paciente.horaInicio){
        console.log('ha hechoe esto:', props.paciente)
        let fecha = new Date(props.paciente.horaInicio);
        fecha.setHours(fecha.getHours());
        props.paciente.horaInicio = fecha;
    }

    return  ( 
        <Card style={{margin: 5, padding: 15 ,borderRadius: 30, boxShadow: '0 0 10px 0.05px grey' }}>
            <div className=' d-flex justify-content-between' >
                    <img className='rounded' width="auto" height="90px" src={process.env.PUBLIC_URL + props.paciente.foto} style={{boxShadow: '0 0 5px 0.05px grey' }}/>
                <div className="d-flex flex-column" >
                    <div style={{ fontSize: '20px' }} className='d-flex flex-row' > 
                        <b> {props.paciente.name} </b>
                        <Card style={{ margin: '3%', width: 'auto', fontSize: '10px', backgroundColor: props.color}} > {props.presente}</Card>
                    </div>
                    <font style={{ fontSize: '15px' }} > <b> Motivo de consulta:</b>{props.paciente.motivo} </font>
                </div>
                
                <div className="d-flex flex-column"  > 
                    <p style={{ fontSize: '15px' }} > <b> Hora de inicio:</b> { props.paciente.horaInicio ? props.paciente.horaInicio.toString().substr(16,17).substr(0, 5):'-'} </p>
                    {/* <font style={{ fontSize: '15px' }} > <b> Hora de salida:</b> {props.paciente.hora_fin_consulta ? props.paciente.hora_fin_consulta.substring(11, 16):'-'} </font> */}
                </div>

        {(props.cancelado & (props.index > 2)) ? <button onClick={() => borrarCita(props.paciente.dni)} style={{backgroundColor: 'transparent' , borderColor: 'transparent', width:'11%' }}> 
        <p>CANCELAR</p>
        <img className="rounded" width='auto' height="20px" src={process.env.PUBLIC_URL + "/cruz.png"}/>
        </button>
        :
         <button onClick={()=> props.GetPaciente(props.paciente)} style={{backgroundColor: 'transparent' , borderColor: 'transparent', width:'11%' }}>
        <p>{props.posicion}</p>
        <img className="rounded" width='auto' height="20px" src={process.env.PUBLIC_URL + "/mayor.png"}/>
        </button>}
             </div>
        </Card>
        )
    }