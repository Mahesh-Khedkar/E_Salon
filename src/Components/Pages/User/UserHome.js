import React from 'react';
import Navbar from '../../Navbar/User_nav';
import './User.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shop1 from '../../Images/Shop1.jpg';
import Shop2 from '../../Images/Shop2.jpg';
import Shop3 from '../../Images/Shop3.jpg';
import Shop4 from '../../Images/Shop4.jpg';
import Shop5 from '../../Images/Shop5.jpg';
// import Shop from './Clipper';
import Footer from '../../Pages/Home/Footer';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/EventNote';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Most_Popular = () => {
  const navigate = useNavigate();

  return (
    <div className='most_Popular'>
    <Navbar/>
    <br></br>
      <div className='m_nav' style={{ borderBottom: '0.5px solid gray'}}>
      <div className='iconsContainer'>
        <div className='icons' >
          <HomeIcon/>
        </div>
        <div className='icons' style={{marginLeft:'20px'}}>
          <NotesIcon/>
        </div>
        <div className='icons' style={{marginLeft:'20px'}}>
          <NotificationsIcon/>
        </div>
      </div>
      <div className='buttons'>
      <div>
        <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}> <b>RATINGS</b></Button>
      </div>
      <div>
        <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>OFFERS</b></Button>
      </div>
      <div>
        <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>FOR MENS</b></Button>
      </div>
      <div>
        <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>FOR WOMENS</b></Button>
      </div>
      <div>
        <Button style={{ color: 'black', border: 'none', backgroundColor: 'transparent' }}><b>FILTERS</b></Button>
      </div>
      </div>
      </div>

      <div className='mostcontainer'>
      <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
      <Card.Img variant="top" src={Shop2} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>

          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>

        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop1} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop4} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop1} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

      </div>
      <br></br>
      <div className='mostcontainer' style={{marginTop:'30px'}}>
      <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop4} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop3} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop5} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'15rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src={Shop1} />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button className='cardbtn' onClick={()=> navigate('/user/shop')}>Hair salon</Button>
        </Card.Body>
        </Card>
      </div>
      <Footer/>
    </div>
  )
}
export default Most_Popular
