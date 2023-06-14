import React from 'react';
import Card from 'react-bootstrap/Card';
import Rev2 from '../../../Images/Review 2.jpg';

const OurTeamCard = () => {
  return (
    <div>
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
  )
}

export default OurTeamCard
