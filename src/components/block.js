import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import BlockHeader from "./blockHeader"

function Block(props) {
    return (
        <div className="ct-container ct-mx-auto ct-py-4 md:ct-py-20">
            <BlockHeader title={props.title} />
            {props.children}
        </div>
    );
}

export default Block;
