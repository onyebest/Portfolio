/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/Eat1.jpg'
import React2 from '../assets/Eat2.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>WHO AM I?</h1>
            <p>I'm a react front-end Developer. I create responsive secure website for my clients.</p>
            <Link className='btn' to='/contact'>Contact</Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='image' />
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt='image' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent