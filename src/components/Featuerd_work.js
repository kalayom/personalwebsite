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
            <Image_card
            img="efbpims.png"
            detail="Government managed directory for Food, Beverage & Pharmaceutical goods manufactured in Ethiopian"
            address="https://efbpims.gov.et/"
            Isdone={1} />
            <Image_card img="phalak.png"
            detail="An online system than links patients with a licensed physiotherapy and delivers personalized care" 
            // address="https://efbpims.gov.et/"
            Isdone={1}/>
            <Image_card img="buttler.png"
            detail="A digital precence of a agriculcural and heavy equipment distribution company"
            // address=""
            />
            
            </Row>
    )
}