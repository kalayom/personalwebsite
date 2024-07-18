import React from "react"
import Image_card from "./Image_card"
// import Testimonial from "./Testimonial"
// import { Container, Row, Col } from 'react-bootstrap';
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";

export default function Featuerd_work() {
    
    return (
         
            <Row className="one">
              <Col xs={12} sm={12} md={6} lg={4}>
              <Image_card
            img="efbpims.png"
            detail="Government managed directory for Food, Beverage & Pharmaceutical goods manufactured in Ethiopian"
            address="https://efbpims.gov.et/"
            Isdone={1} />
              </Col>
            <Col xs={12} sm={12} md={6} lg={4} >
            <Image_card img="phalak.png"
            detail="An online system than links patients with a licensed physiotherapy and delivers personalized care" 
            address="https://kalayom.me/"
            Isdone={1}/>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
            <Image_card img="buttler.png"
            detail="A digital precence of a agriculcural and heavy equipment distribution company"
            // address=""
            />
            </Col>
           
            
            </Row>
    )
}