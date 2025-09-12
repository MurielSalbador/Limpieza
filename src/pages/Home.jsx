import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiciosSlider from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Floating from '../components/AnimationWrapper'

import "../styles/global.css"
import { Import } from 'lucide-react'

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

    <div>
      <Footer />
    </div>
    </>
  )
}

export default Home