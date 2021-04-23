import React from "react";
import "./style.css";

function HeaderHero(props) {
    return(
        <div className="header-img" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
       {props.children}
        {/* <div className="offset-1 col-9 " id="home"></div> */}
        </div>
    )
}

export default HeaderHero