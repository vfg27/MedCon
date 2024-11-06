
import { Card } from 'react-bootstrap';


export default function Salir(props) {

return  <div className=' flex-sm-column'>
<Card style = {{backgroundColor : '#92ACBC', paddingTop: 0}} >
<div className='d-flex justify-content-between' style={{ paddingBottom: 0}}>
    <div className= 'flex-column'>
        <div style={{marginLeft: 15}}>
           {  props.es_medico ?  <></>:<button onClick = {() => props.es_medicoTrue()}style={{fontWeight: 600, backgroundColor: 'transparent' , borderColor: 'transparent',}}> VOLVER </button>}
         </div>
    </div>
    <div className="App">
      <div style={{marginRight: 15}}>
      <a href="https://localhost:8083/logout" fontColor='white'>SALIR</a>
      </div>
    </div>
</div>
</Card>
</div>
}