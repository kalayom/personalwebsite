import React from 'react';
import Card from 'react-bootstrap/Card';
import {
    Row,
    Col,
  } from "reactstrap";
 
export default function Popup_basic() {
    return (
        <div >
            
            <Card >
        <Card.Body>
          <h3 className="contact-Text">
          Contact me with 
          </h3>
          <h5 style={{paddingTop:'15px',textAlign: "center"}}>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/contact/linkedin.png`} className='image--contact' />
            <a href="https://www.linkedin.com/in/abrham-geberemdhin/" >https://www.linkedin.com/in/abrham-geberemdhin/</a>
          </h5>
          <h5 style={{paddingTop:'15px',textAlign: "center"}}>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/contact/email.png`} className='image--contact' />
             : kalayom13@gmail.com
          </h5>
          <h5 style={{paddingTop:'15px',textAlign: "center"}}>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/contact/telegram.png`} className='image--contact2' />
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/contact/whatsup.png`} className='image--contact' />
             : +91 8347821722
          </h5>
        </Card.Body>
      </Card>
           
        </div>
        // <div>
        //     <h4>Popup - GeeksforGeeks</h4>
        //     <Popup trigger=
        //         {<button> Click to open modal </button>} 
        //         modal nested>
        //         {
        //             close => (
        //                 <div className='modal'>
        //                     <div className='content'>
        //                         Welcome to GFG!!!
        //                     </div>
        //                 </div>
        //             )
        //         }
        //     </Popup>
        // </div>
    )
};


// import { Container, Row, Col } from 'react-bootstrap';

         
        <Row className="contact-div">
            <Col></Col>
            <Col>
            <Card style={{ width: '50rem' , height:'20rem'}} >
        <Card.Body>
          <Card.Text className="contact-Text">
          Do you like what you see
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col></Col>
           
        </Row>