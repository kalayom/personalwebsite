import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Top() {

    
    return (  
            <Row className="one" >
            {/* <Row className="one" style={{ height: '150vh', backgroundColor: bgColor }}></Row> */}
            <Col xs={4} sm={5} md={6} lg={6} className="two">
            <h1 className="hero--header">Hi I'm Abrham</h1>
            <h3 className="hero--text">
            I bridge the gap between your ideas and reality using code. I am a passionate web developer who focuses on developing and building attractive, mobile-friendly , secure applications and systems for businesses and individuals
            </h3>
            </Col>
            <Col>
            <div xs={8} sm={7} md={6} lg={6}>
            <img src={`${process.env.PUBLIC_URL}/images/image2_1.png`}   className="ab--photo"/>
            </div>
            </Col>
            
            
            </Row>      
    )
}