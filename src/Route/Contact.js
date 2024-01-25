import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroPro from '../components/HeroPro'
import cotact from '../assets/contacts.jpg'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <NavBar />
      <HeroPro image={cotact} heading='CONTACT ME' text='Let Have a Chat' />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact