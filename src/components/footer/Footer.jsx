import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer=()=>{
    return(
        <footer>
            <a href="#" className='footer_logo'>VARDHAN</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Proficiency</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonial">Inspiration</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer_socials'>
                
                <a href="https://www.linkedin.com/in/harsha29/"><BsLinkedin/></a>
                <a href="https://github.com/Harshavrdhana"><FaGithub/></a>
                <a href="https://www.instagram.com/harsha_n_acharya/"><FiInstagram/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy;Vardhan.co. All rights reserved </small>
            </div>
        </footer>
    )
}

export default Footer