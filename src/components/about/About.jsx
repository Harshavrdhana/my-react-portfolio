import React from 'react'
import "./about.css"
import Me from "/assets/me-about1.jpg"
import { FaAward } from "react-icons/fa"
import { MdCastForEducation } from "react-icons/md"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Trained React.js Developer</small>
                        </article>
                        <article className="about_card">
                            <MdCastForEducation className='about_icon' />
                            <h5>Education</h5>
                            <small>Bachelor of Engineering</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>4+ Projects</small>
                        </article>
                    </div>
                    <p>
                        An energetic and adaptable frontend developer excited about the intersection of design and technology. Seeking a challenging role where I can contribute to tech-driven projects, collaborate with like-minded professionals, and continuously enhance my skills in a fast-paced and dynamic environment.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About
