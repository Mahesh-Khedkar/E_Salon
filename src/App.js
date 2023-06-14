import React from 'react';
import {  BrowserRouter,  Route, Routes} from 'react-router-dom';
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User";
import Shop from './Components/Pages/Shop/Clipper';
import Services from './Components/Pages/Shop/Services';
import Offers from './Components/Pages/Shop/Offers';
import Book from './Components/Pages/BookSeat/BookSeat';
import Wait from './Components/Pages/BookSeat/Wait'
import Session from './Components/Pages/BookSeat/Session';


const App = () => {
  return (
    // <div>
    //   {/* <Home/> */}
    //   <User/>
    // </div>
    
  <BrowserRouter>
   <Routes>
      <Route exact path='/'  element={<Home />} />
      <Route exact path='/user' element={<User />} />
      <Route exact path='/user/shop' element={<Shop />} />
      <Route exact path='/book' element={<Book />} />
      <Route exact path='/wait' element={<Wait />} />
      <Route exact path='/timeout' element={<Session />} />

      </Routes>
  </BrowserRouter>
  )
}

export default App
