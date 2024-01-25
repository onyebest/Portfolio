import React from 'react'
import './Hero.css'
import Eight from '../assets/eigth.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={Eight} alt='image' />
        </div>
        <div className='content'>
            <p>HI I'M A FREELANCER</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default Hero;