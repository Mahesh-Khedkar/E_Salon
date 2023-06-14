import React from 'react'
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rev1 from './Images/Review 1.jpg';
import Rev2 from './Images/Review 2.jpg';
import Rev3 from './Images/Review 3.jpg';
import Rev4 from './Images/Review 4.jpg';


const Most_Popular = () => {
  return (
    <div className='reviews'>
    <br></br>
      <h2 style={{paddingLeft:'120px'}}>Reviews</h2>
      <div className='Rcontainer'>
      <div style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px', cursor: 'pointer'}}>
          <h1>  </h1>
        </div>
      <Card style={{ width: '12rem', height:'10rem',border:'none'}}>
          <div >
          <Card.Img variant="top" src={Rev2} style={{ width: '60px',height:'60px', borderRadius:'30px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Harry</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>
        
        <Card style={{ width: '12rem', height:'10rem',border:'none'}}>
          <div >
          <Card.Img variant="top" src={Rev1} style={{ width: '60px',height:'60px', borderRadius:'30px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Larry</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'10rem',border:'none'}}>
          <div >
          <Card.Img variant="top" src={Rev3} style={{ width: '60px',height:'60px', borderRadius:'30px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Harry</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>
        
        <Card style={{ width: '12rem', height:'10rem',border:'none'}}>
          <div >
          <Card.Img variant="top" src={Rev4} style={{ width: '60px',height:'60px', borderRadius:'30px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Larry</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>
        <div style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px', cursor: 'pointer'}}>
          <h1>></h1>
        </div>
      </div>
    </div>
  )
}

    

export default Most_Popular
