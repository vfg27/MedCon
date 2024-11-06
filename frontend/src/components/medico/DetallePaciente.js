import NavBar from '../Navbar';
import Salir from './Salir';
import Datospaciente from './Datospaciente'
import FichaPaciente from './FichaPaciente'

export default function Detallepaciente(props) {

    const data = [{name: "Venancia Echevarria Leal", motivo: ' Luxación de rodila', llegada: ' 10:44', salida: ' 10:47', registrada: true},
    {name: "Mila Guzmán Espinal", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47',registrada: true },
    {name: "Jose Manuel Martínez", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: true},
    {name: "Sergio García López", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: false},
    {name: "Sara Pérez Garcho", motivo: ' Problemas respiratorios', llegada: ' 10:44', salida: ' 10:47', registrada: true}]

    const posiciones = ['ANTERIOR', 'ANTERIOR', 'ACTUAL', 'SIGUIENTE', 'SIGUIENTE'];

    return  ( 
        <div>
          <NavBar/>
          <Salir/>
        <div className=' d-flex flex-row' style={{backgroundColor: '#F4F7F9', paddingTop:20}} >
        <div class="p-2" style={{width: "50%"}}>
            <FichaPaciente paciente={data[0]}/>
        </div>
        <div class= "p-2">
            {data.map((paciente, index) =>
            
            <div key={paciente.name}>{<Datospaciente paciente={paciente} posicion={posiciones[index]} color={paciente.registrada ? 'green':'red'}/>}</div>
            )}
        </div>
    
        </div> 
        </div>
        )    

}