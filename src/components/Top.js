import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Top() {

    const [bgColor, setBgColor] = useState('white');

    const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 1508) {
        setBgColor('green');
        } else {
        setBgColor('white');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return ( 
            <Row className="one" >
            {/* <Row className="one" style={{ height: '150vh', backgroundColor: bgColor }}></Row> */}
            <Col className="two">
            <h1 className="hero--header">Hi I'm Abrham</h1>
            <h3 className="hero--text">
            I bridge the gap between your ideas and reality using code. I am a passionate web developer who focuses on developing and building attractive, mobile-friendly , secure applications and systems for businesses and individuals
            </h3>
            </Col>
            <Col className="three">
            <img src={`${process.env.PUBLIC_URL}/images/image2_1.png`}  style={{ width: '120%', height: 'auto' }} className="ab--photo"/>
            </Col>
            
            </Row>      
    )
}