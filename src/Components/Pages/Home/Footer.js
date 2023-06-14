import React from 'react';
import './components.css';
import Card from 'react-bootstrap/Card';
import Flogo from '../../Images/Footer logo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

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
                    <td colSpan={2}>
                    <FacebookIcon  style={{cursor:'pointer'}}/>
                    <InstagramIcon style={{cursor:'pointer', marginLeft:'5px'}}/>
                    </td>

                </tr>
                <tr>
                    <td>Sitemap</td>
                    <td>Pricing</td>
                    <td>Terms and conditions</td>
                    <td colSpan={2}>
                    <TwitterIcon style={{cursor:'pointer'}}/>
                    <YouTubeIcon style={{cursor:'pointer', marginLeft:'5px'}}/>
                    </td>
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
