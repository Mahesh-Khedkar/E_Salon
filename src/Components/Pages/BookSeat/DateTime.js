import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const DateTime = () => {
  return (
    <div style={{display:'flex', marginTop:'30px',justifyContent:'space-evenly'}}>
      <section style={{ display:'flex', flexDirection:'column'}}>
        <div>
          <h4>Select Date and Time with Tsukiji </h4>
        </div>
        <div className='dates'>

        <div className='date_card' style={{ border:'0'}}>
            <h4>May</h4>
        </div>
        <div className='date_card'>
            Mon
            <h3>10</h3>
        </div>

        <div className='date_card'>
            Tue
            <h3>11</h3>
        </div>

        <div className='date_card'>
            Wed
            <h3>12</h3>
        </div>

        <div className='date_card'>
            Thu
            <h3>13</h3>
        </div>

        <div className='date_card'>
            Fri
            <h3>14</h3>
        </div>

        <div className='date_card'>
            Sat
            <h3>15</h3>
        </div>
        <div className='date_card' style={{height:'40px', width:'40px', borderRadius:'20px'}}>
          <ArrowForwardIosIcon/>
        </div>
        </div>
        <div className='timeContainer'>
          <button className='timebtn'>10:30 am</button>
          <button className='timebtn'>11:00 am</button>
          <button className='timebtn'>11:30 am</button>
          <button className='timebtn'>12:00 pm</button>
        </div>
        <div className='timeContainer' style={{paddingTop:'2px'}}>
          <button className='timebtn'>12:30 pm</button>
          <button className='timebtn'>01:00 pm</button>
          <button className='timebtn'>01:30 pm</button>
          <button className='timebtn'>02:00 pm</button>
        </div>

      </section>
      
      <div className='div2'>

      </div>

    </div>
  )
}

export default DateTime
