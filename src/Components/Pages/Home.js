import React from 'react';
import Navbar from '../Navbar/Navbar';
import Most_Popular from '../Most_Popular';
import Reviews from '../Reviews';
import Download from '../Download_app';
import Best from '../Best_solution';
import Business from '../BusinessWith'
import Footer from '../Footer';


const Home = () => {
  const myStyle = {
    backgroundImage: `url(${require('../Images/HomeBG copy.jpg')})`,
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
        {/* <h1>Book your seat and</h1>   */}
      </div>
      <Most_Popular/>
      <Reviews/><br></br>
      <Download/><br></br>
      <Best/><br></br>
      <Business/>
      <Footer/>
    </>
  );
};

export default Home;
