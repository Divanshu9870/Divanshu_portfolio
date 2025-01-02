import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
    <div className='container' id='contact'>
    <h1>Contact</h1>
    <div className='contact-icon' data-aos="zoom-in-up" data-aos-duration='1000'>
      <a href='https://www.instagram.com/divanshu1591/reels/?hl=en' target='_blank' className="items"><FaInstagram className='icons' /></a>
      <a href='https://www.linkedin.com/in/divanshu-singh-357084141/' target='_blank' className="items"><FaLinkedin className='icons'/></a>
      <a href='https://github.com/Divanshu9870?tab=repositories' target='_blank' className="items"><FaGithub className='icons' /></a>
      {/* <a href='' className="items"><FaFacebook className='icons' /></a> */}
      <a href='mailto:devanshusingh3009@gmail.com' target='_blank' className="items"><SiGmail className='icons' /></a>
    </div>

    </div>
    
    
    </>
  )
}

export default Contact