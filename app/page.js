import React from 'react'
import Footer from './components/Main/Footer'
import { NavbarFuck } from './components/Main/Navbar'
import SplashScreen from './components/Main/SplashScreen'
// import {Hero} from './components/Main/Hero'
import Hero from './components/Main/Hero'

function page() {
  return (
    <>  
     <SplashScreen>  
        <NavbarFuck/>
          <Hero/>
        <Footer/>
     </SplashScreen>
   </>
  )
}

export default page