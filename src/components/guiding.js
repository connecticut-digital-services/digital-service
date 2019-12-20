import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Guiding({ heading, principles }) {
  return (
    <Block id={`guiding`} className={`lg:ct--mx-8`} title={heading}>
        <div className={`ct-flex ct-flex-wrap ct--mx-2`}>
          {principles.map((principle, index) => {
            const node = principle.node
            console.log(node)
            return <Card icon={node.frontmatter.icon} title={node.frontmatter.title} content={node.frontmatter.description} />
          })}
        </div>
    </Block>
  );
}

export default Guiding;
