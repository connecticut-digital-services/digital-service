import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import BlockHeader from "./blockHeader"

function Block(props) {
    return (
        <div id={props.id || `block-${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`} className={props.className}>
            <div className={`ct-max-w-4xl ct-container ct-mx-auto ct-py-8 md:ct-py-20`}>
                {props.title && (
                    <BlockHeader title={props.title} />
                )}
                {props.children}
            </div>
        </div>
    );
}

export default Block;
