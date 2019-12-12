import React from "react";
import Block from './block';
import Img from "gatsby-image"

function Work({ data, list }) {
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>{data.header}</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-12`}>
        <p className={`ct-mb-6`}>{data.text}</p>
      </div>
      {list && (
        <div className={`ct-flex ct-flex-wrap ct--mx-2`}>
          {list.edges.map((announcement, index) => {
            console.log(announcement.node);
            return (
              <a key={index} href={announcement.node.fields.slug} className={`ct-flex ct-flex-col ct-mx-2 ct-w-1/3 ct-p-4 ct-border-2 ct-border-primary-normal ct-block hover:ct-border-primary-dark hover:ct-bg-primary-dark hover:ct-text-white`}>
                <div className={`ct-font-bold ct-text-xl ct-mb-2`}>{announcement.node.frontmatter.title}</div>
                <div className={`ct-mb-4 ct-flex-grow`}>{announcement.node.frontmatter.excerpt}</div>
              </a>
            )
          })}
        </div>
      )}
      {data.projects && (
        <div className={`ct-flex ct-flex-wrap ct--mx-2`}>
          {data.projects.map((announcement, index) => {
            return (
              <a key={index} href={announcement.cta_link} className={`ct-flex ct-flex-col ct-mx-2 ct-w-1/3 ct-p-4 ct-border-2 ct-border-primary-normal ct-block hover:ct-border-primary-dark hover:ct-bg-primary-dark hover:ct-text-white`}>
                <div className={`ct-font-bold ct-text-xl ct-mb-2`}>{announcement.title}</div>
                <div className={`ct-mb-4 ct-flex-grow`}>{announcement.description}</div>
                <div className={`ct-font-bold`}><i class={`fas fa-arrow-right ct-mr-2`}></i> {announcement.cta_text}</div>
              </a>
            )
          })}
        </div>
      )}
    </Block>
  );
}

export default Work;
