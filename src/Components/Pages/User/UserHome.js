import React from 'react'
import './User.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Most_Popular = () => {
  return (
    <div className='most_Popular'>
    <br></br>
      <div className='m_nav' style={{ borderBottom: '0.5px solid gray'}}>
      <div className='iconsContainer'>
        <div className='icons' >H</div>
        <div className='icons' style={{marginLeft:'20px'}}>N</div>
        <div className='icons' style={{marginLeft:'20px'}}>N</div>
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
      {/* <br></br> */}
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
    </div>
  )
}
export default Most_Popular
