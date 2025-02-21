import React from 'react'
import experience from './Data/experience.json'
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Experience() {
    console.log(experience)
  return (
  <>
  <div className="container" id='experience'>
    <h1>Experience</h1>
{
  experience && experience.map((ele,idx)=>{
return <Container className="mt-5 ex-items" data-aos="zoom-in" data-aos-duration='1000'>
<Row className="justify-content-center">
  <Col xs={12} md={6} lg={8}>
 
     
      <Card.Body className="text-center">
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
      </Card.Body>
   
  </Col>
</Row>
</Container>
  })
}
    

  






  </div>
  
  </>
  )
}

export default Experience