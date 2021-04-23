import React from "react";
import "./style.css";

function HeaderHero(props) {
    return(
        <div className="header-img" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className="offset-1 col-9 " id="home"></div>
            <h3 className="fade title">I am Web development student at BCS</h3>
       {/* {props.children} */}
        {/* <div className="offset-1 col-9 " id="home"></div> */}
        </div>
    )
}

export default HeaderHero