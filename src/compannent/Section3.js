import React from "react";
import Img3 from "../img/Content Image 02.png"

function Section3(){
    return(
        <div id="secthree">
            <div className="container" >
                <div className="sectionthree">
                    <div className="img3">
                        <img src={Img3}></img>
                    </div>
                    <div className="sectionthree-text">
                    <h1>Subscription index</h1>
                    <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                    <h4>Learn more</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section3;