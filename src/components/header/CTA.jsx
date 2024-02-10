import React from 'react'
import CV from "/assets/Harshavardhana-resume.pdf"

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
    </div >
  )
}

export default CTA