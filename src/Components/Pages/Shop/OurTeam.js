import React from 'react';
import Card from 'react-bootstrap/Card';
import './Clipper.css';
import { Col, Row } from 'react-bootstrap';
import Rev1 from '../../Images/Review 1.jpg';
import Rev2 from '../../Images/Review 2.jpg';
import Rev3 from '../../Images/Review 3.jpg';
import Card1 from './Cards/OurTeamCard';

const OurTeam = () => {
  return (
    <div>
        <h4 style={{marginLeft:'50px', marginTop:'30px'}}>You can select professional artist and book seat at suitable time.</h4>
        <div className='teamContainer' >
         <Row style={{padding:20}}>
            <Col>
             <div >
                <div style={{height:'100px', width:'425px', display:'flex', borderRadius:'50px',textAlign:'center', background: 'linear-gradient(90deg, silver, white)'}}>
                    <div>
                    <Card.Img variant="top" src={Rev2} style={{ width: '100px',height:'100px', borderRadius:'50px' }}/><br></br>
                    </div>
                    <div>
                    <h4 style={{paddingTop:'10px'}}>TSUKIJI OMAKASE</h4>
                    <p  style={{marginLeft:'10px',marginRight:'20px'}}>A platter of our handcrafted sushi, curated by our head chef</p>
                    </div>
                </div>
             </div>
            </Col>
            <Col>
             <div >
                <div style={{height:'100px', width:'425px', display:'flex', borderRadius:'50px',textAlign:'center', background: 'linear-gradient(90deg, silver, white)'}}>
                    <div>
                    <Card.Img variant="top" src={Rev1} style={{ width: '100px',height:'100px', borderRadius:'50px' }}/><br></br>
                    </div>
                    <div>
                    <h4 style={{paddingTop:'10px'}}>TSUKIJI OMAKASE</h4>
                    <p  style={{marginLeft:'10px',marginRight:'20px'}}>A platter of our handcrafted sushi, curated by our head chef</p>
                    </div>
                </div>
             </div>
            </Col>
            </Row>
            <Row style={{padding:20, marginTop:'5px'}}>
            <Col>
             <div >
                <div style={{height:'100px', width:'425px', display:'flex', borderRadius:'50px',textAlign:'center', background: 'linear-gradient(90deg, silver, white)'}}>
                    <div>
                    <Card.Img variant="top" src={Rev3} style={{ width: '100px',height:'100px', borderRadius:'50px' }}/><br></br>
                    </div>
                    <div>
                    <h4 style={{paddingTop:'10px'}}>TSUKIJI OMAKASE</h4>
                    <p  style={{marginLeft:'10px',marginRight:'20px'}}>A platter of our handcrafted sushi, curated by our head chef</p>
                    </div>
                </div>
             </div>
            </Col>
            <Col>
                <Card1/>
            </Col>
            </Row>
        </div>
    </div>
  );
  
}

export default OurTeam
