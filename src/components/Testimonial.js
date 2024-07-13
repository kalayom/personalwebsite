import React from 'react';
import Button from 'react-bootstrap/Button';
import Simple_card from "./Simple_card"
// import Card from 'react-bootstrap/Card';
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";


export default function Testimonial() {

  return (
        <Container >
            <Row className='one'>
            <Simple_card 
              statement= "I was impressed by Abrham's portfolio and his ability to understand my vision for a user-friendly and visually appealing website. I'm confident they would be a great asset to my project."
              name="Dr. Phalak"
              position="Physioterapist at Marwadi University"/>
            <Simple_card 
              statement= "Finding a developer who can translate my ideas into a real, functional website felt impossible. Then I came across abrhams portfolio. His work is not only stunning but also seems incredibly user-friendly. I can't wait to discuss my project further! "
              name="Dr. Phalak"
              position="Physioterapist at Marwadi University"/>
            <Simple_card 
              statement= "Government managed directory for Food, Beverage & Pharmaceutical goods manufactured "
              name="Dr. Phalak"
              position="Physioterapist at Marwadi University"/>
            </Row>
    </Container>
    );

}
