import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Simple_card(data) {

  return (
        <Card style={{ width: '20rem', padding: '1rem', marginBottom: '5rem' }} className='image--card'>
        {/* <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/featured/phalak.png`}  /> */}
        <Card.Body>
            
            <Card.Text className='testimonial--text'>
            “{data.statement}”.
            </Card.Text>
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
