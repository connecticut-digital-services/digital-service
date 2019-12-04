import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Card(props) {
    return (
        <div className="ct-w-full sm:ct-w-1/2 ct-mb-4 ct-flex ct-px-2">
            <div className={`ct-border-primary-light ct-border-4 ct-p-8 ct-bg-white`}>
                <div className="ct-text-6xl ct-mb-4">
                    <i class={`fal fa-${props.icon}`}></i>
                </div>
                <div className="ct-leading-none ct-text-primary-dark ct-font-bold ct-text-primary-normal ct-text-xl md:ct-text-2xl ct-leading-tight ct-mb-4">{ props.title }</div>
                <div className="ct-text-l md:ct-text-xl ct-leading-tight">{ props.content }</div>
            </div>
        </div>
    );
}

export default Card;
