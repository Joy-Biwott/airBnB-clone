import React from "react";

function Card (props){
    let badgeText
    if (props.data.openSpots ===0){
        badgeText="SOLD OUT"
    } else if (props.data.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>}
           <img className="card--image" src={`../public/assets/${props.data.coverImg}`} alt={props.data.coverImg}/> 
           <div className="card--stats">
            <img src="../public/assets/star.png" className="card--star"/>
            <span>{props.data.rating}</span>
            <span className="gray">({props.data.reviewCount}) • </span>
            <span className="gray">{props.data.location}</span>
           </div>
           <p className="card--title">{props.data.title}</p>
           <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
        </div>
    )
}

export default Card;