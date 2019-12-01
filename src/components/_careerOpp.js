import React from "react";

function CareerOpp(props) {
    return (
      <a href={props.link} className={`ct-flex`}>
        <span className={`ct-flex-auto`}>
          <span className={`ct-block`}>{props.title}</span>
          <span className={`ct-block`}>{props.location}</span>
        </span>
        <span>
          Learn More
        </span>
      </a>
    );
}

export default CareerOpp;
