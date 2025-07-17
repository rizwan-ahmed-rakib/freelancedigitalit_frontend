import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ContactInfo from './ContactInfo'
import Service from './Service'
import ContactForm from './ContactForm'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ContactInfo/>
      <Service/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
