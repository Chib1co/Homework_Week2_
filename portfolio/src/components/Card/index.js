import React from 'react'

export default function Card(props) {
    return (
        <div class="card shadow">
          <div class="content-hover">
            <img class="card-img-top img-redirect" src={props.img} alt={props.img_alt}/>

          </div>
          <div class="text-block">
            <h4 class="repo-title">{props.title}</h4>
            <p>{props.desc}</p>
          <div class="link-btns">
          <a type="button" class="btn btn-link" href={props.github} target="blank">Github page<i class="fas fa-chevron-right"></i></a>
          <a type="button" class="btn btn-link" href={props.app_link} target="blank">Deployed page<i class="fas fa-chevron-right"></i></a>
        </div>
        </div>
      </div>
    )
}
