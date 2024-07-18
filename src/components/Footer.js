
import React from "react"
import {
    Container,
    Row,
    Col,
    Nav,
    NavLink,
    Stack
  } from "react-bootstrap";
export default function Footer() {
    
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    
  },
};
    return (
        <footer style={styles.footer}>
      <Container>
        <Row>
          <Col >
          <Stack>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} 
          alt="Company logo" className="nav--logo"/>
          <h2 style={{color: "white"}}> Company Name</h2>
          <p style={{color: "white"}}> Company Tag line</p>
          </Stack>
          
          </Col>
          <Col>
          </Col>
          <Col>
          <Stack>
          <Nav className="flex-colums fs-5">
           Contact Information    
            <NavLink href="#" style={{color: "white"}}>Email : kalayom13@gmail.com</NavLink>
            <NavLink href="#" style={{color: "white"}}>Phone Number :+91 8347821722</NavLink>
            <NavLink href="https://www.linkedin.com/in/abrham-geberemdhin/" style={{color: "white"}}>Linkedin : /abrham-geberemdhin/</NavLink>
            </Nav>
            </Stack>
          </Col>
          
        </Row>

      </Container>
    </footer>
    )
}