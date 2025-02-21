import React from 'react'
import projects from './Data/projects.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <>
    <div className="container project my-3" id='projects'>
    <h1>Projects</h1>
    <Row className='d-flex justify-content-center align-content-center'>
    {
      projects && projects.map((data,ele)=>{
        return <>
        <Col key={ele} xs={12} md={3}  className='my-4 mx-4 d-flex justify-content-center '>
        <Card data-aos="flip-right" data-aos-duration='1000' className='card bg-dark text-light justify-content-center align-content-center' style={{ width: '22rem',border:'1px solid yellow',boxShadow:'5px 5px 10px 5px rgba(101,175,10,0.5)' }}>
          <div className='img d-flex justify-content-center align-content-center p-3'><Card.Img style={{height:'210px',width:'250px'}} variant="top" src={data.imageSrc} /></div>
      
      <Card.Body className='text-center'>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button href={data.demo} variant="primary mx-3">Demo</Button>
        <Button href={data.source} variant="warning">Code</Button>
      </Card.Body>
    </Card>

        </Col>
        
        </>
      })
    }

    </Row>

    </div>
    
    
    </>
  )
}

export default Projects