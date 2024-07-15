import React from "react"
import '../style_nav.css'

export default function Navbar() {
   
    return (
        <nav style={{backgroundColor: "white"}}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="nav--logo"/>
        </nav>                  
    );
}
