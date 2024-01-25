import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Work from '../components/work'

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Work />
      <Footer />
    </div>
  )
}

export default Home