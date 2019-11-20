import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Card(props) {
    return (
        <div className="ct-mb-12">
            <div className="ct-text-primary-normal ct-text-xl md:ct-text-2xl ct-leading-tight ct-mb-4">{ props.title }</div>
            <div>{ props.content }</div>
        </div>
    );
}

export default Card;
