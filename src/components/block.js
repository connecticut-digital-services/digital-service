import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import BlockHeader from "./blockHeader"

function Block(props) {
    return (
        <div className="ct-max-w-4xl ct-container ct-mx-auto ct-py-4 md:ct-py-10">
            {props.title && (
                <BlockHeader title={props.title} />
            )}
            {props.children}
        </div>
    );
}

export default Block;
