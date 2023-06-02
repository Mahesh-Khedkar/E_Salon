import React from 'react';
import Navbar from './User_nav';
import UserHome from './UserHome';
import Clipper from './Clipper';
import Footer from '../../Footer';

const User = () => {
  return (
    <div>
      <Navbar/>
      <UserHome/>
      <Clipper/>
      <Footer/>
    </div>
  )
}

export default User
