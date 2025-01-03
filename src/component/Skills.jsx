import React from 'react'
import skill from './data/skills.json'

function Skills() {
  return (
    <div className='container skills' id='skills'>

    <h1>Skills</h1>
    <div className='items' >
    {

      skill && skill.map((ele,ind)=>{
        return <>
        
          <div className='item' key={ind} data-aos="flip-left" data-aos-duration='1000'>
          <img src={`/assets/${ele.imageSrc}`} />
          <h2>{ele.title}</h2>
          </div>

        
        </>
      })
    }


    </div>
    </div>
  )
}

export default Skills