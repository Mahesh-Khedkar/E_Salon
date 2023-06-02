import React from 'react';
import './User.css';

const User_nav = () => {
  return (
    <div>
        <nav class="navbar">
            <div class="navbar-container">
                <div class="navbar-brand"><h2>KLEEPX</h2></div>

                <div class='search_container'>
                    <input type='text' style={{border:'none',width:'230px', backgroundColor:'transparent'}} placeholder='Search your shop'></input>
                    <div style={{ width: '32px',height:'32px', border:'1px solid black', borderRadius:'16px', paddingLeft:'20px', cursor: 'pointer'}}>

                    </div>
                </div>
                <div class="navbar-buttons">            
                    <div style={{ width: '32px',height:'32px', border:'1px solid black', borderRadius:'16px', paddingLeft:'20px' }}>
                        {/* icon */}
                    </div>
                    <select style={{ border : 'none',cursor: 'pointer',width:'100px'}}>
                        <option>Select</option>
                        <option>Vadodara</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                    </select>
                    <div style={{ width: '40px',height:'40px', border:'1px solid black', borderRadius:'20px', cursor: 'pointer'}}>
                        {/* image */}
                    </div>
                       <button class="button">=</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default User_nav
