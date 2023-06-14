import React from 'react';
import "./Navbar.css";

import {
  Nav,
  NavLogo,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function CollapsibleExample() {
  return (
    // <body>
    //   <nav class="navbar">
    //     <div class="navbar-container">
    //       <div class="navbar-brand">KLEEPX</div>
    //       <div class="navbar-buttons">
    //         <button class="button">Log In</button>
    //         <button class="button">Sign Up</button>
    //         <button class="button">Partner</button>
    //       </div>
    //     </div>
    //   </nav>
    // </body>

<>
<Nav>
  <NavLogo to="/">KLEEPX</NavLogo>

  <NavMenu>
    {/* <NavLink to="/" activeStyle>
      Home
    </NavLink> */}
    <NavLink to="/signin" activeStyle style={{border:'2px solid white', borderRadius:'25px',color:'white'}}>
    Log In
    </NavLink>
    <NavLink to="/SignUp" activeStyle style={{border:'2px solid white', borderRadius:'25px', marginLeft:'20px',color:'white'}}>
      SignUp
    </NavLink>
    {/* <NavLink to="/contact" activeStyle>
      Contact
    </NavLink> */}
    
    {/* <NavBtn> */}
    <NavLink to="/partner" activeStyle style={{border:'2px solid white', borderRadius:'25px', marginLeft:'20px', backgroundColor:'white',color:'black'}}>
      Partner
    </NavLink>
    {/* </NavBtn> */}
  </NavMenu>
</Nav>
</>




  );
}

export default CollapsibleExample;
