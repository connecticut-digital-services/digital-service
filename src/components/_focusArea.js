import React from "react";

function FocusArea(props) {
    return (
      <div className={`ct-mb-10 ct-w-full md:ct-w-1/2 ct-flex ct-px-4`}>
        <div className={`ct-mr-6 ct-text-4xl ct-pt-1 ct-text-secondary-green`}>
          <i class={`fad fa-${props.icon}`}></i>
        </div>
        <div>
          <div className="ct-text-primary-dark ct-text-2xl">
            <a href={props.slug}>{props.title}</a>
          </div>
          <div className="ct-text-l">{props.subtitle}</div>
        </div>
      </div>
    );
}

export default FocusArea;