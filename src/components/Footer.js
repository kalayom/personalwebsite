import React from "react"
import Card from 'react-bootstrap/Card';
import {
    Row,
    Col,
  } from "reactstrap";
export default function Footer() {
    
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  nav: {
    marginTop: '0.5rem',
  },
  link: {
    color: '#fff',
    margin: '0 0.5rem',
    textDecoration: 'none',
  }
};
    return (
        <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Kalayom. All rights reserved.</p>
        <nav style={styles.nav}>
          <div>Phone Number: <b>+91 8347821722</b> </div>
          <div>Email: <b>abrhamgebremedhin8@gmail.com</b>  </div>
           
          <a href="https://www.linkedin.com/in/abrham-geberemdhin/" style={styles.link}>Linkedin : https://www.linkedin.com/in/abrham-geberemdhin/</a>
        </nav>
      </div>
    </footer>
    )
}