import React from 'react';
import './Clipper.css';
import { Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';


const Offers = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='OffersNav'>
          <div style={{widows:'70px'}}>
            <h4 style={{cursor:'pointer'}}>Hair cutting</h4>
           </div>
          <div style={{widows:'70px'}}>
            <h4 style={{cursor:'pointer'}}>Massage</h4>
         </div>
         <div>
            <h4 style={{cursor:'pointer'}}>Beard trim + shaving</h4>
         </div>
         <div style={{widows:'70px'}}>
            <h4 style={{cursor:'pointer'}}>Hair color</h4>
         </div>
         <div style={{widows:'70px'}}>
             <select style={{height:'40px',width:'90px', border:'dotted',borderRadius:'20px', cursor:'pointer'}}>
                 <option>more</option>
                    <option></option>
                   <option></option>
             </select>
         </div>
        </div>
        <div className='divContainer'>
            <div className='Sdiv1'>
                <div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                    <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                     <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                    <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                    <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                    <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                    <div className='cards'>
                    <div style={{display:'flex', alignItems:'center',paddingLeft:'15px',textSize:'5px'}}>
                        <p>Simple hair cut<br></br>
                        Time: 1 hr.
                        20$ save20%</p>
                        <div className='addService'>
                            Add
                            <AddIcon/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            <div className='Sdiv2'>
                <h3 style={{textAlign:'center',marginTop:'10px'}}> <b>Your services</b></h3>
                <p style={{marginLeft:'40px',marginTop:'40px'}}> Simple hair cut</p>
                <p style={{marginLeft:'40px',marginTop:'40px'}}> Simple hair cut</p>
                <p style={{marginLeft:'40px',marginTop:'40px', borderBottom:'2px solid black'}}> Simple hair cut</p>
                <h5 style={{textAlign:'center',marginTop:'10px'}}> <b>Total</b></h5>
                <p style={{textAlign:'center',marginTop:'20px'}}> Combine service time.</p>
                <h5 style={{textAlign:'center',marginTop:'10px'}}> <b>2 Hrs.</b></h5>
                <Button style={{marginLeft:'100px', marginTop:'50px',backgroundColor:'black',borderRadius:'20px'}} onClick={()=> navigate('/book')}> 
                Select time
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Offers
