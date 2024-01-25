import React from 'react'
import './Footer.css'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: 'white', marginRight: '2rem'}} />
                    <div>
                      <p>123 Housing society.</p>
                      <p>Nyanya Abuja</p>
                    </div>
                </div> 
                <div className='phone'>
                  <h4>
                  <FaPhone size={20} style={{color: 'white', marginRight: '2rem'}} />
                  09067277274
                  </h4>
                </div>
                <div className='email'>
                  <h4>
                  <FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}} />
                  samuelegbo126@gmail.com
                  </h4>
                </div>
            </div>

            <div className='right'>
              <h4>About my Company</h4>
              <p>Our commitment to excellence drives us to stay at the forefront of technological advancements. We embrace the latest frameworks, libraries, and tools to ensure that your software solutions are efficient, secure, and future-proof. Whether it's front-end development, back-end systems, database management, or API integration, our programmers possess the expertise to deliver seamless and intuitive experiences.</p>
              <div className='social'>
                <Link><FaTwitter size={20} style={{color: 'white', marginRight: '2rem'}} /></Link>
                <Link target='_blank' to='https://www.facebook.com/profile.php?id=100086762701172'><FaFacebook size={20} style={{color: 'white', marginRight: '2rem'}} /><FaPhone size={20} style={{color: 'white', marginRight: '2rem'}} /></Link>
                <Link target='_blank' to='www.linkedin.com/in/samuel-onyebuchi-159514281'><FaLinkedin size={20} style={{color: 'white', marginRight: '2rem'}} /></Link>
              </div>
            </div>
        </div>
    </div>  
  )
}

export default Footer