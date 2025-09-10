import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiciosSlider from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'

import "../styles/global.css"

const Home = () => {
  return (
    <>
     <div>
        <Header />
    </div>

    <div>
        <Hero />
    </div> 

     <div>
      <About />
    </div>

    <div>
        <ServiciosSlider />
    </div>

     <div>
      <Contact />
    </div>
    </>
  )
}

export default Home