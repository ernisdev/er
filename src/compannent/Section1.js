import React from "react";
import Secone from '../img/Hero 3D.png'
// import {AiOutlineArrowDown}  from 'react-icons/ai'
import Arrow from '../img/Down Arrow.png'

function Section1 (){
    return(
        <div id="secone">
            <div className="container">
                <div className="sectionone">
                    <div className="seconeh1">
                    <h1>Grow your<br/>
                    subscription<br/>
                    business<br/>
                    </h1> 
                    <p> Outcome-centered products that reduce churn,<br/> optimize pricing, and grow your subscription<br/> business end-to-end.</p>
                    <div className="img-btn">
                     <button className="secone-btn">Get Started</button>
                     <img  src={Arrow}></img>
                    </div>

                    </div>
                    <div className="secone-img">
                        <img src={Secone}></img>
                    </div>
                     </div>
                </div>
            </div>
       
    )
}
export default Section1;