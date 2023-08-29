import React from "react";
import Logo1 from '../img/Group.svg'
import Logo2 from '../img/Group (1).svg'
import Logo3 from '../img/Group (2).svg'
import Logo4 from '../img/Group (3).svg'
import Logo5 from '../img/Group (4).svg'

function Section2 (){
    return(
      
      <div id="secto">
        <div className="container">
            <div className="sectionto">
                <div className="logo-img">
                  <img src={Logo1}></img>
                  <img src={Logo2}></img>
                  <img src={Logo3}></img>
                  <img src={Logo4}></img>
                  <img src={Logo5}></img>
                </div>
            </div>
        </div>
      </div>  
    )
}
export default Section2;