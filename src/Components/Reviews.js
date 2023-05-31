import React from 'react'
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Most_Popular = () => {
  return (
    <div className='reviews'>
    <br></br>
      <h2 style={{paddingLeft:'80px'}}>Reviews</h2>
      <br></br>
      <div className='mostcontainer'>
      <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title style={{ fontSize: '17px' }}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ color: 'black', border: '1px solid-sblack', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title style={{ fontSize: '17px' }}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title style={{ fontSize: '17px' }}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
          <Card.Title style={{ fontSize: '17px' }}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

      </div>
    </div>
  )
}

    

export default Most_Popular
