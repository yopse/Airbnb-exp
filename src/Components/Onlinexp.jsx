import React from "react";
import Card from "./Card";
import img from "./images/katie-zaferes.png";
import data from "../data";
const Onlinexp = () => {

  
         
    let dataAll  = data.map((e) => {

         return (<Card key={e.id}
        
           imgc={img}
           {...e}
          ></Card>

         )
    })



  return (
    
      <div className="online-experience-box">
        {dataAll}
      </div>
    
  );
};



export default Onlinexp;