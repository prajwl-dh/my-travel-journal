import React from "react"
import GlobeLogo from "../images/globe-logo.png"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-items">
                <img src={GlobeLogo} alt="globe-icon" className="navbar-items-globe-logo" />
                <p className="navbar-items-heading">Prajwal's Travel Journal</p>
            </div>
        </div>
    )
}