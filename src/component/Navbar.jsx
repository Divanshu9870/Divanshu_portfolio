import React from 'react'

function Navbar() {
  return (
    <>
    <div collapseOnSelect expand='sm' className='container nav_bar' data-aos='fade-down' data-aos-duration='1500'>
        <div className='left nav_items'>PORTFOLIO</div>
        <div className='right'>
            <a href="#home" className="nav_items nav_hover  ">Home</a>
            <a href="#experience" className="nav_items nav_hover">Experience</a>
            <a href="skills" className="nav_items nav_hover">Skills</a>
            <a href="#projects" className="nav_items nav_hover">Projects</a>
            <a href="#contact" className="nav_items nav_hover">Contact</a>

        </div>
    </div>
     
    </>
  )
}

export default Navbar