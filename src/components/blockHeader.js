import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function BlockHeader(props) {
    return (
        <div >
            <h2 className="ct-text-2xl md:ct-text-4xl ct-font-bold">{props.title}</h2>
        </div>
    );
}

export default BlockHeader;
