import React from 'react'
import './portfolio.css'
import data from "./PortfolioData"

function Portfolio() {

  const portfolioElements=()=>(
    data.map(({...data}) =>{
      return(
        <article key={data.id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={data.image} alt={data.title} />
          </div>
          <h3>{data.title}</h3>
          <div className='portfolio_item-cta'>
            <a href={data.github} className='btn' target='_blank'>Github</a>
            <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      )
    })
  )

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {portfolioElements()}
      </div>
    </section>
  )
}
export default Portfolio