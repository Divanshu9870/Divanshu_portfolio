import React, { useRef,useEffect} from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from './Data/Hero.json'
import Typed from 'typed.js'

function Home() {

    const typedRef=useRef(null)

    useEffect(() => {
      const options={
        strings:['Welcome to my profile!','My name is Divanshu Singh.','I am a frontend developer.'],
        typeSpeed:50,
        backSpeed:50,
        loop:true
      }

      const typed = new Typed(typedRef.current,options)
    
      return () => {
        typed.destroy()
      }
    }, [])
    


  return (
    <>
    
    <div className='container home' id='home'>
      <div className="left" data-aos="fade-up-right" data-aos-duration='2000'>

      <h1 ref={typedRef}></h1>
      <a href={pdf} download='Resume.pdf' className='btn btn-outline-warning my-3'>Download Resume</a>

      </div>
      <div className="right" data-aos="fade-up-left" data-aos-duration='2000'>

      <div className='img'>

        <img src={`/assets/${hero.imgSrc}`} alt='' />
      </div>


      </div>
    </div>
    
    </>
  )
}

export default Home