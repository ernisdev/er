import React from "react";
import Sec4 from "../img/Content Image.png"

function Section4(){
    return(
        <div id="secfo">
            <div className="container">
                <div className="sectionfo">
                <div className="secfo">
                    <h1>In-depth metrics</h1> 
                    <p>Accurate, real-time reporting at your fingertips.<br/> Getting data has never been easier.</p>
                    <button>Learn more</button>
                    </div>
                    <div className="secfo-img">
                         <img src={Sec4}></img>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Section4;