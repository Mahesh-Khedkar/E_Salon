import React from 'react';
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import M1 from '../../Images/mockup 1.png'
import M2 from '../../Images/mockup 2.png'


const Most_Popular = () => {
  return (
    <div className='download1'>
      <div className='QR'>
        <h1><b>Download the Kleepx App</b></h1><br></br><br></br>
        <h5><b>
          Book your seat from KleepX and save your<br></br>
          valuable time at beauty shop
          </b>
          <div style={{display:'flex', justifyContent:'space-around',marginTop:'40px',alignItems:'flex-start'}}>
            <div style={{height:'120px', width:'120px',border:'1px solid black'}}></div>
            <div style={{height:'120px', width:'120px',border:'1px solid black'}}></div>
          </div>
        </h5>
        
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
