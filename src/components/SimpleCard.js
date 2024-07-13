import React from "react"

export default function SimpleCard(data) {
    return (
        <div className="contact-card">
            <img src={data.img}/>
            <h3>{data.name}</h3>
            <div className="info-group">
                <img src="./images/star.png" />
                <p>{data.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/star.png" />
                <p>{data.email}</p>
            </div>
        </div>
    )
}
