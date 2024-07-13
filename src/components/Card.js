import React from "react"

export default function Card(data) {
    

    let badgeText
    console.log(data.openSpots)
    if (data.openSpots === 0) {
        console.log(badgeText)
        badgeText = "SOLD OUT"
    } else if (data.location === "Online") {
        console.log(badgeText)
        badgeText = "ONLINE"
    }
    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${process.env.PUBLIC_URL}/images/${data.img}`}  alt="Cover image" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span className="gray">{data.rating}</span>
                <span className="gray"> ({data.review_count}) • </span>
                <span className="gray">{data.country}</span>
            </div>
            <p>{data.bookname}</p>
            <p>From ${data.price} / person</p>
        </div>
    )
}