// airbnb
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Top from "./components/Top"
import Footer from "./components/Footer.js"
import Testimonial from "./components/Testimonial"
import Featuerd_work from "./components/Featuerd_work"
import Card_base from "./components/Card_base.js"
import Card from "./components/Card" 
import Auto_scroll from "./components/Auto_scroll"
import Jock from "./components/Jock"
import Form from "./components/Form_basic.js"
import Signup from "./components/Signup.js"
import data from "./data.js" 
import Contact from "./components/Contact" 
import Test from "./components/Test.js"
import Featch from "./components/Featch.js"
import jokesData from "./components/jokesData"

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Jock setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }


export default function App() {
    const elements = data.map(info => {
     
        return <Card img={info.coverImg} rating={info.stats.rating} 
         country={info.location} review_count={info.stats.reviewCount}
         bookname = {info.title} price={info.price} openSpots={info.openSpots}
         location = {info.location}/>

        //  return <Card 
        //  key={item.id}
        //         info={info}
        //         />
    })

    
    return (
        <div>
            <div className="page-content">
				<Navbar />
                <Top />
				<div className="content-wrapper">
                
                        <div className="homepage-container">
                            {/* <Test /> */}
                            <h4 className="skills"> I am Proficient in </h4> 
                            <Auto_scroll />
                            {/* <Card_base /> */}
                            <h4 className="skills2"> Featured Website Projects </h4> 
                            <Featuerd_work />
                            <h4 className="skills2"> Clients Testimonials </h4> 
                            <Testimonial />
                            
                            </div>
                           
            </div>
            
            
            {/* <section className="cards-list">
            {elements }
            </section>  */}
             <Contact />
        
            
        
        </div>
        <Footer />
        </div>
    )
}

/// simpleCard

// import React from "react"
// import SimpleCard from "./components/SimpleCard"


// export default function App() {
//     return (
//         <div className="contacts">
//             <SimpleCard 
//             img="./images/Graduation.jpg"
//             name="Mr. West"
//             phone={65}
//             email="1@gmail.com"/>
//             <SimpleCard 
//             img="./images/IMG.jpg"
//             name="Mr. East"
//             phone={1002}
//             email="2@gmail.com"/>
//             <SimpleCard 
//             img="./images/55.png"
//             name="Mr. North"
//             phone={1003}
//             email="3@gmail.com"/>
//             <SimpleCard 
//             img="./images/photo_2023.jpg"
//             name="Mr. South"
//             phone={1004}
//             email="4@gmail.com"/>
            
//         </div>
//     )
// }
   

// Array dot map
// ----- --- ---
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function(num) {
//     return num * num
// })
// console.log(squares)


// Array dot map
// -------------
// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map(name => (
//     name[0].toUpperCase() + name.slice(1))
// )
// console.log(sqcapitalizeduares)
