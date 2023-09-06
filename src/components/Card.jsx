import React from "react";

function Card (props){
    return(
        <div className="card">
           <img className="card--image" src={`../public/assets/${props.coverImg}`} alt={props.coverImg}/> 
           <div className="card--stats">
            <img src="../public/assets/star.png" className="card--star"/>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
           </div>
           <p className="card--title">{props.title}</p>
           <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;