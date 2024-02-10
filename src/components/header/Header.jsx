import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '/assets/me1.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I&apos;m</h5>
            <h1>Harshavardhana U N</h1>
            <h5 className="text-light">Software Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="me"/>
            </div>

            <a href="#contact" className="scroll_down">Scroll Down</a>
            
        </div>
    </header>
  )
}

export default Header