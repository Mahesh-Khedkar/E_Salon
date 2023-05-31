import React from 'react'

import "./Navbar.css";

function CollapsibleExample() {
  return (
    <body>
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-brand">KLEEPX</div>
          <div class="navbar-buttons">
            <button class="button">Log In</button>
            <button class="button">Sign Up</button>
            <button class="button">Partner</button>
          </div>
        </div>
      </nav>
    </body>
  );
}

export default CollapsibleExample;
