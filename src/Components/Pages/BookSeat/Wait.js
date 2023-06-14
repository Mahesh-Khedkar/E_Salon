import React, { useState } from 'react';
import './Book.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BackArrow from '@material-ui/icons/KeyboardBackspaceRounded';
import Footer from '../Home/Footer';
import Select from './SelectStaff';
import Date from './DateTime';
import Rev from './ReviewBook';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

const Wait = () => {
    const navigate = useNavigate();

    let[activeComponent,setactiveComponent] = useState();
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
        <Button className='navbtn' onClick={() => navigate('/book')}><BackArrow/></Button>
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

      <center>
        <div className='div2' style={{marginTop:'20px', width:'480px',height:'250px'}}>
    
            <h3>
            You will get response from shop within 5 min
            </h3><br></br>
            <div style={{height:'80px', width:'80px',border:'1px solid black'}}><AccessAlarmsIcon/></div><br></br>
        </div>
        
        </center>
        <Footer/>
    </div>
  )
}

export default Wait
