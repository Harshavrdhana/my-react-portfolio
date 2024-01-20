import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import SkillsDescription from './components/skillsDescription/SkillsDescription'

const App=()=>{
  return(
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <SkillsDescription/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App; 