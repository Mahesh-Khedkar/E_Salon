import React, { useState } from 'react';
import './Clipper.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../../Navbar/User_nav';
import Shop1 from '../../Images/Shop1.jpg';
import Shop2 from '../../Images/Shop2.jpg';
import Shop3 from '../../Images/Shop3.jpg';
import Shop4 from '../../Images/Shop4.jpg';
import Shop5 from '../../Images/Shop5.jpg';
import Service from "./Services";
import Offers from './Offers';
import OurTeam from './OurTeam';
import Review from './Reviews';
import Footer from '../../Pages/Home/Footer';



const Clipper = () => {
  
  let[activeComponent,setactiveComponent] = useState('Service');
  const handleClick=(componentName)=>{
    setactiveComponent(componentName)
  };
  return (
    <div>
    <Navbar/>
      <div className='images' style={{height:'370px', marginTop:'20px'}}>
         {/* <h6 style={{marginLeft:'130px'}}>Home / Vadodara / Subhanpura / Clipper & Co.</h6> */}
          <div className='ImgContainer'>
              <div style={{height:'370px', width:'550px'}}>
                <Card.Img variant="top" src={Shop5} />
              </div>
              <div style={{height:'370px', width:'275px'}}>
                 <div style={{height:'185px', width:'275px'}}>
                 <Card.Img variant="top" src={Shop1} />
                 </div>
                 <div style={{height:'185px', width:'275px'}}>
                 <Card.Img variant="top" src={Shop4} />
                 </div>
                 
              </div>
              <div style={{height:'370px', width:'275px'}}>
              <Card.Img variant="top" src={Shop3} style={{height:'370px'}} />
              </div>
          </div>
      </div>
        <div className='Cinfo'>
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
                <Button 
                style={{cursor:'pointer', backgroundColor:'transperent', borderRadius:'20px', width:'180px'}}
                >
                <b>Now Open</b>
                </Button>
            </div>
        </div>

        <div className='nav'>
            <div>
                <Button className='navbtn' onClick={() => handleClick('Service')}><b>Services</b></Button>
            </div>
            <div>
                <Button className='navbtn' onClick={() => handleClick('Offers')}><b>Offers</b></Button>
            </div>
            <div>
                <Button className='navbtn' onClick={() => handleClick('OurTeam')}><b>Our Team</b></Button>
            </div>
            <div>
                <Button className='navbtn' onClick={() => handleClick('Review')}><b>Review</b></Button>
            </div>

        </div>
        <div>
          {activeComponent === "Service" && <Service /> }
          {activeComponent === "Offers" && <Offers/> }
          {activeComponent === "OurTeam" && <OurTeam/> }
          {activeComponent === "Review" && <Review/> }

        </div>

        <h3 style={{marginLeft:'50px', borderBottom:'1px solid gray'}}>Other shops in vadodara</h3>
        <div className='otherShops'>
      <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop2} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop1} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop5} />
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
        <Button variant="primary" style={{ width: '70px', backgroundColor: 'transparent', color:'black', borderRadius: '35px' }} >More</Button>
        </Card.Body>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Clipper
