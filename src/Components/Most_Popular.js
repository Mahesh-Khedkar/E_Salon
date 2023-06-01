import React from 'react'
import './components.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Most_Popular = () => {
  return (
    <div className='most_Popular'>
    <br></br>
      <h2 style={{paddingLeft:'80px'}}>Most popular shops</h2>

      <div className='m_nav' style={{ borderBottom: '1px solid black' }}>
      <h3 >50 beauty shops</h3>
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
      </div><br></br>

      <div className='mostcontainer'>
      <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

      </div>
      <br></br>
      <div className='mostcontainer'>
      <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '12rem', height:'13rem', borderRadius:'15px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body style={{background: 'linear-gradient(white, gray)', borderRadius:'15px'}}>
          <Card.Title style={{ fontSize: '13px'}}>PHONES & ACCESSORIES</Card.Title>
          <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text>
          <Button style={{ padding:'2px 10px', color: 'black', border: '1px solid black', borderRadius: '15px', backgroundColor: 'transparent' }}>Hair salon</Button>
        </Card.Body>
        </Card>

        <div style={{ width: '12rem' }}>
          <Card.Body>
          {/* <Card.Title>PHONES & ACCESSORIES</Card.Title> */}
          {/* <Card.Text>
          4.5 (2255) <br></br>
          Torrento, Canada
          </Card.Text> */}
        <Button variant="primary" style={{ width: '7rem', backgroundColor: 'gray', border: 'gray'}} >MORE</Button>
        </Card.Body>
        </div>
      </div>
    </div>
  )
}

    

export default Most_Popular
