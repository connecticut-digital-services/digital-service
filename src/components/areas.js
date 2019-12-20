import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import FocusArea from './_focusArea';
import { node } from "prop-types";

function Areas({
  title,
  text,
  cta,
  cta_url,
  areas
}) {
  return (
    <Block title={false}>
      <h2 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>{title}</h2>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-10`}>{text}</div>
      <div className={`ct-flex ct-flex-wrap ct--mx-4`}>
        {areas.map((area, index) => {
          const node = area.node
          return <FocusArea slug={area.node.fields.slug} icon={node.frontmatter.icon} title={node.frontmatter.title} subtitle={node.frontmatter.description} />
        })}
      </div>
      <a href={cta_url} className={`ct-underline ct-text-primary-normal hover:ct-text-primary-dark`}>{cta}</a>
    </Block>
  );
}

export default Areas;
