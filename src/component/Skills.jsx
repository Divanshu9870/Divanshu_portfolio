import React from 'react'
import skill from './Data/skills.json'
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Skills() {
  return (
    <div className='container skills' id='skills'>

    <h1>Skills</h1>
    <div className='' >
    
        
        <Container className="mt-5">
      
      <Row className="justify-content-center items">
        {skill.map((card, index) => (
          <Col key={index} xs={12} md={4} className="mb-4 item" data-aos="flip-left" data-aos-duration='1000' style={{}}>
            
            {/* <div className='item' key={index} data-aos="flip-left" data-aos-duration='1000'> */}
          <img src={`/assets/${card.imageSrc}`} />
          <h2>{card.title}</h2>
          {/* </div> */}
              
           
          </Col>
        ))}
      </Row>
    </Container>

        
  


    </div>
    </div>
  )
}

export default Skills