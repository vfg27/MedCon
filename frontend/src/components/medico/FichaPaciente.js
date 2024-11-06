
import { Card } from 'react-bootstrap';



export default function FichaPaciente(props) {
 
    if (props.paciente.horaInicio){
        console.log('ha hechoe esto:', props.paciente)
        let fecha = new Date(props.paciente.horaInicio);
        fecha.setHours(fecha.getHours());
        props.paciente.horaInicio = fecha;
    }

    return  ( 
        <Card  style = {{backgroundColor : '#92ACBC',padding:10, borderRadius: 40, marginBottom:20, boxShadow: '0 0 10px 0.05px grey'}}>
            <div className=' d-flex justify-content-center'>
                <img className="rounded" style={{boxShadow: '0 0 10px 0.05px grey'}} width='50%' height="auto" src={process.env.PUBLIC_URL + props.paciente.foto}/>
            </div>
            <div className=' d-flex justify-content-center'  >
            <font className= 'd-flex justify-content-center' style={{ fontWeight: 400,marginTop:40, fontSize: '20px' }}> <b>NOMBRE: </b> {props.paciente.name} </font>
              </div>
             <div className=' d-flex justify-content-center'  >
             <font className= 'd-flex justify-content-center' style={{ fontWeight: 400,marginTop:40, fontSize: '20px' }}> <b>HORA DE INICIO: </b> { props.paciente.horaInicio ? props.paciente.horaInicio.toString().substr(16,17).substr(0, 5):'-'} </font>
             </div> 
             <div className=' d-flex justify-content-center'  >
             <font className= 'd-flex justify-content-center' style={{ fontWeight: 400,marginTop:40, fontSize: '20px' }}> <b> MOTIVO: </b>{props.paciente.motivo}</font>
             </div>
    

            
        </Card>
        )
    }
 
