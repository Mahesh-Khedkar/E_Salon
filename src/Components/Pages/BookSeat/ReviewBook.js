import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';


const ReviewBook = () => {

  const navigate = useNavigate();

  return (
    <div>
        <center>
        <div className='div2' style={{marginTop:'20px', width:'480px',height:'550px'}}>
            <center>
            <h2>Selected service</h2></center>
            <div>Simple hair cut</div>
            <div>Simple hair cut</div>
            <div>Simple hair cut</div>
            <hr></hr>
            <b>Total</b>
            <hr></hr>

            <h3>Click on Request and you will get response from shop within 5 min</h3>
        </div>
        <button style={{borderRadius:'20px',height:'50px',width:'110px',backgroundColor:'black',color:'white',}}onClick={()=> navigate('/wait')}>
        <b>Request</b>
        </button>
        </center>
    </div>
  )
}

export default ReviewBook
