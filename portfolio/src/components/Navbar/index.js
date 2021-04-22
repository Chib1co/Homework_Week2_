import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-text" style={"font-family: Georgia, 'Times New Roman', Times, serif;"}>Tomomi Inoue</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav" id="menu">
                <li className="nav-item">
                  <Link to = "/" 
                  className={
                      window.location.pathname === "/" || window.location.pathname === "Aboutme"
                   ? "nav-link active"
                   : "nav-link"
                   }
                >
                  Home/About me
                   </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/portfolio" 
                  className={
                      window.location.pathname === "/portfolio" 
                   ? "nav-link active"
                   : "nav-link"
                   }
                >
                  Portffolio
                   </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link active" href="contact.html">Contact<span class="sr-only">(current)</span></a> */}
                  <Link to = "/contactme" 
                  className={
                      window.location.pathname === "/contactme" 
                   ? "nav-link active"
                   : "nav-link"
                   }
                >
                  Contact me
                   </Link>
                </li>
              </ul>
            </div>
        </nav>
    );
}

export default Navbar;