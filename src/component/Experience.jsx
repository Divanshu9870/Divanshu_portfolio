import React from 'react'
import experience from './Data/experience.json'

function Experience() {
    console.log(experience)
  return (
  <>
  <div className="container" id='experience'>
    <h1>Experience</h1>

  {
    experience && experience.map((ele,ind)=>{
        return <div key={ind} className='ex-items text-center' data-aos="zoom-in" data-aos-duration='1000' >
            {/* <div className='left'>
                <img src={`/assets/${ele.imageSrc}`} alt='' />
            </div> */}
            <div className='right'>
                <h2>{ele.role}</h2>
                <h4>
                <span style={{color:'yellowgreen'}}>{ele.startDate}</span>{" "}
                <span style={{color:'yellow'}}>{ele.endDate}{" "}{ele.location}</span></h4>
                <span style={{color:'yellow'}}>
                {
                  ele.experiences.map((data,indq)=>{
                 return <>
                 <h5>{data}</h5>
                 </>

                  })
                }


                </span>
               


            </div>


        </div>
    })
  }





  </div>
  
  </>
  )
}

export default Experience