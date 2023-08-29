import React from "react";
import Logo from '../img/Logo Color.svg'
import { NavLink } from "react-router-dom";

function Header (){
    return(
        <div id="header">
            <div className="container">
                <div className="header">
                    <div>
                    <NavLink to="/"><img src={Logo}></img></NavLink>

                    </div>
                    <div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"#secto"}>Features</NavLink>
                    <NavLink to="/secthree">Pricing</NavLink>
                    <NavLink to="/secfo">Blog</NavLink>
                    </div>
                    <div>
                      <button className="header-btn">Get Started</button>

                    </div>
                  
             

                </div>
            </div>

        </div>
    )
}
export default Header;

