import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Simple_card(data) {

  return (
        <Card className='simple--card'>
        {/* <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/featured/phalak.png`}  /> */}
        <Card.Body style={{paddingLeft:"2px",paddingRight:"2px"}}> 
            
            <p className='testimonial--text'>
            “{data.statement}”.
            </p>
            <div className='testimonial--div' >

            <img src={`${process.env.PUBLIC_URL}/images/star.png`}  className="testimonial--star"/>
            <img src={`${process.env.PUBLIC_URL}/images/star.png`}  className="testimonial--star"/>
            <img src={`${process.env.PUBLIC_URL}/images/star.png`}  className="testimonial--star"/>
            <img src={`${process.env.PUBLIC_URL}/images/star.png`}  className="testimonial--star"/>
            <img src={`${process.env.PUBLIC_URL}/images/star.png`}  className="testimonial--star"/>
            
            </div>
            <Card.Title>{data.name}</Card.Title>
            <p className='testimonial--p'>{data.position}</p>
        </Card.Body>
        </Card>
    );

}
