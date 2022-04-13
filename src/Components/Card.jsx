import React from "react";
import star from "./images/star.png";
import wedding from "./images/wedding-photography.png";
import moutainBike from "./images/mountain-bike.png";

const Card = (props) => {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }



  return (
  
      <div className="experience-box">
          {badgeText && <div className="sold-badge">{badgeText}</div>}
        <img src={props.imgc} className="experices-img" alt="error" />

        <div className="experience-box-content">
          <img src={star} alt="error" style={{ width: "15px" }} />
          <p style={{ display: "inline-block" }} className="rating-para">
            {props.stats.reviewCount} <span className="country-spn">({props.stats.rating}) {props.location}</span>
          </p>
          <p className="lesson-para">{props.title}</p>
          <p className="price-para">

            From ${props.price} <span className="person-spn">/ person</span>
          </p>
        </div>
      </div>

     
    
  );
};

export default Card;
