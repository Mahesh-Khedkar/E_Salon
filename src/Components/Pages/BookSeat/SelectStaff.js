import React from 'react';
import Add from '@material-ui/icons/Add';
import Card from 'react-bootstrap/Card';
import Rev1 from '../../Images/Review 1.jpg';
import Rev2 from '../../Images/Review 2.jpg';
import Rev3 from '../../Images/Review 3.jpg';
import Rev4 from '../../Images/Review 4.jpg';


const SelectStaff = () => {
  return (
    <div style={{display:'flex', marginTop:'30px',justifyContent:'space-around'}}>
      <div>
       <div className='staff_card'>
        <div className='staff_Img'><Card.Img variant="top" className='staff_Img' src={Rev1} /></div>
        <div className='staff_txt'><h5>tsukiji omakase</h5><p>Experience 2 years</p></div>
        <div className='staff_add'><Add/></div>
      </div>

      <div className='staff_card'>
        <div className='staff_Img'><Card.Img variant="top" className='staff_Img' src={Rev2} /></div>
        <div className='staff_txt'><h5>tsukiji omakase</h5><p>Experience 2 years</p></div>
        <div className='staff_add'><Add/></div>
      </div>

      <div className='staff_card'>
        <div className='staff_Img'><Card.Img variant="top" className='staff_Img' src={Rev3} /></div>
        <div className='staff_txt'><h5>tsukiji omakase</h5><p>Experience 2 years</p></div>
        <div className='staff_add'><Add/></div>
      </div>

      <div className='staff_card'>
        <div className='staff_Img'><Card.Img variant="top" className='staff_Img' src={Rev4} /></div>
        <div className='staff_txt'><h5>tsukiji omakase</h5><p>Experience 2 years</p></div>
        <div className='staff_add'><Add/></div>
      </div>

       <div className='staff_card'>
        <div className='staff_Img'><Card.Img variant="top" className='staff_Img' src={Rev2} /></div>
        <div className='staff_txt'><h5>No preferrence</h5><p>Show best available time</p></div>
        <div className='staff_add'><Add/></div>
       </div>
      </div>

      <div className='div2'>

      </div>

    </div>
  )
}

export default SelectStaff
