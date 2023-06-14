import React from 'react';
import './Navbar.css';
import Card from 'react-bootstrap/Card';
import Flogo from '../../Components/Images/Footer logo.png'
import SearchIcon from '@material-ui/icons/Search';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import Menu from '@material-ui/icons/Menu';


const User_nav = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="navbar-container">
                <div class="navbar-brand">
                <Card.Img variant="top" src={Flogo}></Card.Img>
                </div>

                <div class='search_container'>
                    <input type='text' style={{border:'none',width:'230px', marginLeft:'15px', backgroundColor:'transparent'}} placeholder='Search your shop'></input>
                    <div style={{ width: '32px',height:'32px', borderRadius:'16px', marginLeft:'25px',alignItems:'center',color:'black', cursor: 'pointer'}}>
                        <SearchIcon/>
                    </div>
                </div>
                <div class="navbar-buttons">            
                    <div style={{ width: '32px',height:'32px', borderRadius:'16px', paddingLeft:'5px' }}>
                        <LocationOnTwoToneIcon/>
                    </div>
                    <select style={{ border : 'none',cursor: 'pointer',width:'100px'}}>
                        <option>Select</option>
                        <option>Vadodara</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                    <div style={{ width: '40px',height:'40px', marginLeft:'10px', border:'1px solid black', borderRadius:'20px', cursor: 'pointer'}}>
                        {/* image */}
                    </div>
                    <div style={{ width: '30px',height:'20px', marginLeft:'10px', cursor: 'pointer'}}>
                       <Menu/>
                    </div>   
                </div>
            </div>
        </nav>
    </div>
  )
}

export default User_nav
