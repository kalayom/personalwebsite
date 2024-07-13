// import React from "react"

// export default function Featch() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(0)
    
//     /**
//      * Quiz:
//      * 1. What will happen if I put back our Star Wars API call
//      *    into the effect function?
//      * 2. How will the useEffect be different if I use 
//      *    setStarWarsData() instead of console.log()
//      * 3. What SHOULD be in our dependencies array in this case?
//      */
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [])
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//         </div>
//     )
// }


import React from "react"

export default function Featch() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}


