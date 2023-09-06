import React from "react";

function Card (props){
    return(
        <div>
           <img className={props.coverImg} src={`../public/assets/${props.coverImg}`} alt={props.coverImg}/> 
           <p className="tag">SOLD OUT</p>
           <img src="../public/assets/star.png"/>
           <small>{props.rating} ({props.openSpots}).{props.location}</small>
           <p>{props.title}</p>
           <b>From ${props.price} / person</b>
        </div>
    )
}

export default Card;