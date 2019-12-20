import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function BlockHeader(props) {
    return (
        <div >
            <h2 className="ct-text-3xl md:ct-text-4xl ct-font-bold ct-mb-10 ct-text-primary-dark">{props.title}</h2>
        </div>
    );
}

export default BlockHeader;
