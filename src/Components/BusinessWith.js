import React from 'react';
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import M1 from './Images/mockup 1.png'
import M2 from './Images/mockup 2.png'


const Most_Popular = () => {
  return (
    <div className='download1'>
        <div className='QR'>
            <h1><b>Business with <br></br>Kleepx</b></h1><br></br><br></br>
            <h5><b>
             Register your beauty shop on Kleepx business 
             and make it more visible for online booking.
           </b>
          </h5>
          <Button style={{marginTop:'20px', backgroundColor:'black'}}>Know more</Button>
        </div>
      <div className='mobimg'>
        <div >
          <Card.Img variant="top" src={M1} style={{width:'450px', height:'480px'}}></Card.Img>
        </div>
        <div >
          <Card.Img variant="top" src={M2} style={{width:'450px', height:'480px'}}></Card.Img>
        </div>
      </div>
    </div>
  )
}
export default Most_Popular
