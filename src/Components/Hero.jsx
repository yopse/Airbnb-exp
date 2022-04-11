import React from "react";
import heroimg from "../images/photo-grid.png"


const Hero = () => {



     return(
     <div className="hero-box">
         <img className="hero-img" src={heroimg} />
         <h1>Online Experiences</h1>
         <p>Join unique experiences</p>
     </div>
           
     )
}

export default Hero;