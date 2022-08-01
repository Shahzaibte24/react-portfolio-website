import React, {useState} from 'react'
import "./portfolio.css";

import Data from './portfolioData.json' ;


function Portfolio() {
  const [filterProjects, setFilterProjects] = useState('All') ;

  if(Data.length === 0) {
    return ;
  }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__tabs'>
        {['All', 'HTML CSS JS', 'React JS', 'Wordpress Plugins' , 'Tailwind'].map((item, index) => {
          return <div className={`portfolio__tab btn ${filterProjects === item ? "active" : ""}`} key={index} onClick={() => {setFilterProjects(item)}}>
            {item}
          </div>
        })}
      </div>

      <div className="container portfolio__container">

        {Data.filter((i) => {
          if(filterProjects === 'All') {
            return i;
          } else {
            return i.languages === filterProjects ;
          }
        }).map((item) => {
          return (
            <article className={`portfolio__item`} key={item.id}>
              <div className='portfolio__item-image'>
                <img src={require(`../../assets/${item.img_path}`)} alt="PortfolioImage" />
              </div>
              <h3>{item.title}</h3>
              <small>{item.languages}</small>
              <p>{item.description}</p>
              <div className='portfolio__item-cta'>
                <a href={item.github} className='btn'>Code</a>
                <a href={item.demo_link} className='btn btn-primary'>Demo</a>
              </div>
            </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Portfolio