import React from 'react';
import './User.css';
import './Clipper.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Clipper = () => {
  return (
    <div>
      <div className='images' style={{height:'350px',border:'0.5px solid black'}}>
      <h6 style={{marginLeft:'130px'}}>Home / Vadodara / Subhanpura / Clipper & Co.</h6>
        {/* images */}
      </div>
        <div className='info'  style={{height:'200px',border:'0.5px solid black',display:'flex',justifyContent:'space-around', alignItems:'center'}}>
            <div>
                <h1><b>Clipper & Co.</b></h1>
                <h5>Hair salon</h5>
                <h5>36 Store Street, Bloomsbury, London, England</h5>
                <Button style={{cursor:'pointer', backgroundColor:'transperent', borderRadius:'20px', width:'200px'}}><b>Get Directions</b></Button>
            </div>
            <div>
                <h5>Ratings</h5>
                <h5>Opening time -</h5>
                <h5>Closing time -</h5>
                <Button style={{cursor:'pointer', backgroundColor:'transperent', borderRadius:'20px', width:'180px'}}><b>Now Open</b></Button>
            </div>
        </div>

        <div className='nav'>
            <div>
                <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}> <b>Services</b></Button>
            </div>
            <div>
                <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>Ofers</b></Button>
            </div>
            <div>
                <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>Our Team</b></Button>
            </div>
            <div>
                <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>Reviews</b></Button>
            </div>
        </div>

        <h3 style={{marginLeft:'50px', borderBottom:'1px solid gray'}}>Other shops in vadodara</h3>
        <div className='mostcontainer'>
      <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <div style={{ width: '12rem' }}>
          <Card.Body>
          {/* <Card.Title>PHONES & ACCESSORIES</Card.Title> */}
          {/* <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text> */}
        <Button variant="primary" style={{ width: '7rem', backgroundColor: 'gray', border: 'gray'}} >MORE</Button>
        </Card.Body>
        </div>
      </div>
    </div>
  )
}

export default Clipper
