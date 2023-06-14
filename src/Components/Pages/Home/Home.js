import React from 'react';
import './components.css';
import Navbar from '../../Navbar/Navbar';
import Most_Popular from './Most_Popular';
import Reviews from './Reviews';
import Download from './Download_app';
import Best from './Best_solution';
import Business from './BusinessWith'
import Footer from './Footer';
import PageviewRoundedIcon from '@material-ui/icons/SearchRounded';// PageviewRounded
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${require('../../Images/HomeBG.jpg')})`,
    height: '100vh',
    marginTop: '-90px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div style={myStyle}>
          <center>
          <div style={{color:'white',paddingTop:'235px', fontSize:'50px',letterSpacing:'4px'}}>
            <p><b>Book your seat and</b>  <br></br>
            <b>save your valuable time</b></p>
          </div>
          </center>
          <center>
            <div className='searchContainer' >
                    <LocationOnSharpIcon  style={{ paddingTop:'3px', paddingLeft:'5px'}}/>
                    <h6 style={{fontSize:'18px', paddingTop:'9px', paddingLeft:'10px'}}>Vadodara</h6>
                    <span style={{paddingLeft:'50px',fontSize:'20px'}}><b>|</b></span>
                    <input type='text' style={{border:'0px', height:'30px',width:'230px', marginLeft:'10px',fontSize:'20px', backgroundColor:'transparent'}} placeholder='Search your shop'></input>
                    
                    <div style={{ paddingBottom: '15px',paddingLeft:'55px',cursor:'pointer' }}>
                    <PageviewRoundedIcon />
                    </div>
            </div> 
          </center>
      </div>
      <Most_Popular/><br></br>
      <Reviews/><br></br><br></br>
      <Download/><br></br>
      <Best/><br></br>
      <Business/>
      <Footer/>
    </>
  );
};

export default Home;
