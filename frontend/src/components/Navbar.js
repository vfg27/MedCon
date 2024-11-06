import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';


export default function NavBar() {
    const date = new Date();
    const [dateTime, setDateTime] = useState("");
      useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime(
            date.toString().substr(16,20).substr(0,5)
          );
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    return  <div className=' flex-sm-column' style={{backgroundColor: '#F4F7F9'}} >
    <Card style = {{backgroundColor : '#2C6176', backgroundImage: process.env.PUBLIC_URL + "/logoSanidad.png" }} >
    <div className='d-flex justify-content-around' style={{marginTop: 15}}>
        <div className= 'flex-column'>
            <p style={{color: 'white'}}> Ciudad </p> 
            <p style={{color: 'white'}}> Universitaria </p>
        </div>
        <div style={{marginLeft: 15, marginBottom: 10}}>
        <img className="rounded" width="100%" height="auto" src={process.env.PUBLIC_URL + "/logomedcon.jpeg"}/>
        </div>
        <div className="App">
          <div>
          <p style={{fontSize: '60 px', fontStyle: 'normal',
        fontWeight: 400, fontWeight: 'regular', lineHeight: '64px', color: 'white'}}> {dateTime}</p>
          </div>
        </div>
    </div>
    </Card>
    </div>
};