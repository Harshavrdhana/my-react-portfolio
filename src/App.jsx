import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Inspiration from './components/inspiration/Inspiration'
import Contact from './components/contact/Contact'
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
      <Inspiration/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App; 