import React from "react";
import imge from "../images/k.png";
import star from "../images/star.png";
import wedding from "../images/wedding.png";
import moutainBike from "../images/mountain-bike.png";

const Card = () => {
  return (
    <div className="online-experience-box">
      <div className="experience-box">
        <img src={imge} className="experices-img" alt="error" />

        <div className="experience-box-content">
          <img src={star} alt="error" style={{ width: "15px" }} />
          <p style={{ display: "inline-block" }} className="rating-para">
            5.0 <span className="country-spn">(6) USA </span>
          </p>
          <p className="lesson-para">Life lessons with katie Zaferes</p>
          <p className="price-para">
            {" "}
            From $136 <span className="person-spn">/ person</span>
          </p>
        </div>
      </div>

      <div className="experience-box">
        <img src={wedding} className="experices-img" alt="error" />

        <div className="experience-box-content">
          <img src={star} alt="error" style={{ width: "15px" }} />
          <p style={{ display: "inline-block" }} className="rating-para">
            5.0 <span className="country-spn">(6) USA </span>
          </p>
          <p className="lesson-para">Learn wedding photography </p>
          <p className="price-para">
            {" "}
            From $125 <span className="person-spn">/ person</span>
          </p>
        </div>
      </div>

      <div className="experience-box">
        <img src={moutainBike} className="experices-img wd-img" alt="error" />

        <div className="experience-box-content">
          <img src={star} alt="error" style={{ width: "15px" }} />
          <p style={{ display: "inline-block" }} className="rating-para">
            4.8<span className="country-spn">(2) USA </span>
          </p>
          <p className="lesson-para">Group Mountain Biking</p>
          <p className="price-para">
            {" "}
            From $50 <span className="person-spn">/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
