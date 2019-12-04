import React from "react";

function FocusArea(props) {
    return (
      <div className={`ct-mb-10 md:ct-w-3/4 ct-flex`}>
        <div className={`ct-mr-6 ct-text-4xl ct-pt-1 ct-text-secondary-green`}>
          <i class={`fad fa-${props.icon}`}></i>
        </div>
        <div>
          <div className="ct-text-primary-dark ct-text-3xl">{props.title}</div>
          <div className="ct-text-xl">{props.subtitle}</div>
        </div>
      </div>
    );
}

export default FocusArea;