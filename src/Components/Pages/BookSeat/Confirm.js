import React from 'react'

const Confirm = () => {
  return (
    <div>
      <center>
        <div className='div2' style={{marginTop:'20px', width:'480px',height:'400px'}}>
            <center>
            {/* <h2>Your request is accepted</h2> */}
            </center>
            <div>Simple hair cut</div>
            <div>Simple hair cut</div>
            <div>Simple hair cut</div>
            <hr></hr>
            <b>Total</b>
            <hr></hr>
            <div >
            <h4>Combine service time.  2Hrs</h4>
            <h4>Artist Tsukiji</h4>
            <h4>Selected time   11:00 am</h4>
            <h3>Click on confirm and pay at shop</h3>
            </div>
            <br></br>
            <button style={{borderRadius:'20px',height:'50px',width:'110px',backgroundColor:'black',color:'white',}}><b>Confirm</b></button>
        </div>
        </center>
    </div>
  )
}

export default Confirm
