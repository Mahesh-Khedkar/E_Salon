import React, { useState } from 'react';
import './Book.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BackArrow from '@material-ui/icons/KeyboardBackspaceRounded';
import Footer from '../Home/Footer';
import Select from './SelectStaff';
import Date from './DateTime';
import Rev from './ReviewBook';
import Wait from './Wait';
import Session from './Session';
import BookNow from './BookNow.js';
import Confirm from './Confirm';

const BookSeat = () => {
    const navigate = useNavigate();

    let[activeComponent,setactiveComponent] = useState('Select');
  const handleClick=(componentName)=>{
    setactiveComponent(componentName)
  };

  return (
    <div> 
      <div style={{backgroundColor:'gray',height:'100px',alignItems:'center',padding:'10px 70px',color:'white'}}>
        <h2><b>CLIPPER & CO.</b></h2>
        <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
      </div>

      <div className='nav_book'>
        <Button className='navbtn' onClick={() => navigate('/user/shop')}><BackArrow/></Button>
        <Button className='navbtn' onClick={() => handleClick('Select')}>Select staff</Button>
        <Button className='navbtn' onClick={() => handleClick('Date')}>Date & Time</Button>
        <Button className='navbtn' onClick={() => handleClick('Rev')}>Review & Book</Button>
      </div>

      <div>
          {activeComponent === "Select" && <Select /> }
          {activeComponent === "Date" && <Date/> }
          {activeComponent === "Rev" && <Rev/> }
          {activeComponent === "/wait" && <Wait/> }
      </div>
      <Footer/>
    </div>
  )
}

export default BookSeat
