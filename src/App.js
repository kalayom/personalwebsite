// airbnb
import React from "react"
import Navbar from "./components/Navbar"
import Top from "./components/Top"
import Footer from "./components/Footer.js"
import Testimonial from "./components/Testimonial"
import Featuerd_work from "./components/Featuerd_work"
import Card from "./components/Card" 
import Auto_scroll from "./components/Auto_scroll"
import data from "./data.js" 
import Contact from "./components/Contact" 
import "semantic-ui-css/semantic.min.css";

export default function App() {
    
    
    return (
        <div className="main-div">
            <div className="page-content">
				<Navbar />
                
				<div className="content-wrapper">
               
                        <div className="homepage-container">
                        <Top />
                            {/* <Test /> */}
                            <h4 className="skills"> I am Proficient in </h4> 
                            <Auto_scroll />
                            {/* <Card_base /> */}
                            <h4 className="skills2"> Featured Website Projects </h4> 
                            <Featuerd_work />
                            <h4 className="skills2"> Clients Testimonials </h4> 
                            <Testimonial />
                            {/* <Email_app /> */}
                            
                            </div>
                           
            </div>
            
            
             <Contact />
        
            
        
        </div>
        <Footer />
        </div>
    )
}

