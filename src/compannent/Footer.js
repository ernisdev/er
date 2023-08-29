import React from "react";

function Footer(){
    return(
        <div id="footer">
            <div className="container">
                <div className="foot">
                    <div className="footer1"> 
                        <p>Starter</p>
                        <h3>Free</h3>
                        <p>1 Website </p>
                        <p> 5 GB Hosting </p>
                        <p> Limited Support</p>

                        <button>Get Started</button>
                    </div>


                    <div className="footer2">

                        <p> Premium </p>
                        <h3> $29/month </h3>
                         <p>  10 Website</p>
                          <p>  15 GB Hosting</p>
                        <p>  Premium Support</p>
                           <button>Get Started</button>
                    </div>


                    <div className="footer1">
                        <p>Enterprise</p>
                        <h3>$49/month</h3>
                        <p>  Unlimited Website</p>
                           <p> 50 GB Hosting</p>
                        <p> Premium Support</p>
                     <button>Get Started</button>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Footer;