import React from 'react';
import './components.css';
import Card from 'react-bootstrap/Card';
import Flogo from '../Components/Images/Footer logo.png'

const Footer = () => {
  return (
    <div class="fcontainer">
        <div className='logo'>
            <Card.Img variant="top" src={Flogo}></Card.Img>
        </div>
        <div>
            <table class="tab">
                <tr>
                    <th>About Kleepx</th>
                    <th>Partner Business</th>
                    <th>Legal</th>
                    <th>Social media</th>
                </tr>
                <tr>
                    <td>Team</td>
                    <td>Register shop</td>
                    <td>Privacy policy</td>
                </tr>
                <tr>
                    <td>Sitemap</td>
                    <td>Pricing</td>
                    <td>Terms and conditions</td>
                </tr>
                <tr>
                    <td>Customer support</td>
                    <td>Support</td>
                    <td>Refund policy</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Blogs</td>      
                </tr>
            </table>
        </div>  
    </div>
  )
}

export default Footer
