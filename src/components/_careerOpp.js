import React from "react";

function CareerOpp(props) {
    return (
      <div className={`ct-flex`}>
        <span className={`ct-flex-auto`}>
          <a href={props.link} className={`ct-block ct-font-bold ct-text-primary-dark`}>{props.title}</a>
          <span className={`ct-block`}>{props.location}</span>
        </span>
        <a href={props.link} className={`ct-text-primary-dark ct-border-primary-dark ct-border-2 ct-flex ct-items-center ct-px-4 hover:ct-bg-primary-dark hover:ct-text-white`}>
          Learn More
        </a>
      </div>
    );
}

export default CareerOpp;
