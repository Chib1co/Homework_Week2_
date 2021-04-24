import React from 'react'
import "./style.css";

export default function Card(props) {
    return (
        <div className="card shadow">
          <div className="content-hover">
            <img className="card-img-top img-redirect" src={props.img} alt={props.img_alt}/>

          </div>
          <div className="text-block">
            <h4 className="repo-title">{props.title}</h4>
            <p>{props.desc}</p>
          <div className="link-btns">
          <a type="button" className="btn btn-link" href={props.github} target="blank">Github page<i className="fas fa-chevron-right"></i></a>
          <a type="button" className="btn btn-link" href={props.app_link} target="blank">Deployed page<i className="fas fa-chevron-right"></i></a>
        </div>
        </div>
      </div>
    )
}
