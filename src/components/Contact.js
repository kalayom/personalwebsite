import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popup_basic from './Popup_basic.js';
import Email_app from "./Email_app" 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
    Row,
    Col,
  } from "reactstrap";
import Card_base from "./Card_base.js"
// import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
    
    return (
         
        <Row className="contact-div">
            <Col></Col>
            <Col>
            <Card className="contact-card" >
            <Card.Body style={{paddingLeft:"2px",paddingRight:"2px"}}>
              <p className="contact-text">
              Do you like what you see
              </p>
              <div className="contact-button">
             
              <Popup trigger=
                    {<Button> Let Us talk </Button>} 
                    modal nested>
                    {
                        // close => (
                        //     <div className='modal'>
                        //         <div className='content'>
                        //             Welcome to GFG!!!
                        //         </div>
                        //     </div>
                        // )
                        // <Popup_basic />
                        <Email_app />
                    }
                </Popup>
              
              </div>
              
            </Card.Body>
          </Card>
            </Col>
            <Col></Col>
           
        </Row>
        
    )
}