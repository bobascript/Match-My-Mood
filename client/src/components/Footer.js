import React from "react";
import '../styles/Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div style={{justifySelf:"center",position:"absolute",fontSize:"25px"}}>Find us here!</div>
            <ul>
                <li><button><a target={{}} href="https://www.github.com/bobascript"><i className="fa-brands fa-github fa-3x"/></a>Javier</button></li>
                <li><button><a target={{}} href="https://www.github.com/graciaan"><i className="fa-brands fa-github fa-3x"/></a>Andrew</button></li>
                <li><button><a target={{}} href="https://www.github.com/Lisette33"><i className="fa-brands fa-github fa-3x"/></a>Lisette</button></li>
                <li><button><a target={{}} href="https://www.github.com/asreedy82"><i className="fa-brands fa-github fa-3x"/></a>Anthony</button></li>
            </ul>
        </footer>
    )
}

export default Footer