import React from "react";
import Card from "../img/Card.png"
import Calculator from  "../img/Calculator.png"
import Camera from "../img/Camera.png"

function Section5 (){
    return(
        <div id="secfife"> 
            <div className="container">
                <div className="sectionfife">
                    <div className="fife-1">
                        <img src={Card}></img>
                        <h2>Benchmarks</h2>
                        <p>See how you stack up against comparable<br/> companies in similar stages.</p>
                    </div>
                    <div className="fife-2">
                    <img src={Calculator}></img>
                        <h2>Pricing Audit</h2>
                        <p>Benchmark the health of your monetization<br/> and pricing strategy.</p>
                    </div>

                    <div className="fife-3">
                    <img src={Camera}></img>
                    <h2>Retention Audit</h2>
                    <p>Audit where revenue leakage exists and<br/> where you can increase retention.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5