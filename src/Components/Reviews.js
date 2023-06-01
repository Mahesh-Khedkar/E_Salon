import React from 'react'
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Most_Popular = () => {
  return (
    <div className='reviews'>
    <br></br>
      <h2 style={{paddingLeft:'120px'}}>Reviews</h2>
      {/* <br></br> */}
      <div className='mostcontainer'>
      <Card style={{ width: '12rem', height:'14rem', borderRadius:'15px' }}>
          <div >
          <Card.Img variant="top" src="holder.js/100px180" style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px' }}/>
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
        
        <Card style={{ width: '12rem', height:'14rem', borderRadius:'15px' }}>
          <div >
          <Card.Img variant="top" src="holder.js/100px180" style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px' }}/>
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

        <Card style={{ width: '12rem', height:'14rem', borderRadius:'15px' }}>
          <div >
          <Card.Img variant="top" src="holder.js/100px180" style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Carry</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'14rem', borderRadius:'15px' }}>
          <div >
          <Card.Img variant="top" src="holder.js/100px180" style={{ width: '50px',height:'50px', border:'1px solid black', borderRadius:'25px' }}/>
          </div>
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '17px' }}>Avi</Card.Title>
          <Card.Text>
          Great experience, it saves my valuable time, also helped me to find best shop near my location
          <br></br>
          <h4>****</h4>
          </Card.Text>
        </Card.Body>
        </Card>
      </div>
    </div>
  )
}

    

export default Most_Popular
