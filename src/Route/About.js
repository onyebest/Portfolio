import React from 'react'
import NavBar from '../components/NavBar'
import HeroPro from '../components/HeroPro'
import Footer from '../components/Footer'
import about from '../assets/Abouts.jpg'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
      <NavBar />
      <HeroPro image={about} heading='ABOUT ME' text='About Myself' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About