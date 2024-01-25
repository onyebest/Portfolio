import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroPro from '../components/HeroPro'
import Projects from '../assets/projects.jpg'
import Price from '../components/price'
import Work from '../components/work'

function Project() {
  return (
    <div>
      <NavBar />
      <HeroPro image={Projects} heading='PROJECTS.' text='some of My Most Recent Works'/>
      <Work />
      <Price />
      <Footer />
    </div>
  )
}

export default Project