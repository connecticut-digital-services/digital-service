import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Block from '../components/block';
import {
  Timeline,
  Events,
  TextEvent,
} from '@merc/react-timeline';

function AreaPage({data, html}) {
  const content = data.markdownRemark;

  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]} 
        title="Connecticut Digital Service"
      />
      <Block>
        <a href="/" className={`ct-text-primary-normal ct-underline`}>Home</a>
        <div className={`ct-flex ct-items-center ct-mb-10`}>
          <div className={`ct-mr-2 ct-text-4xl ct-pt-1 ct-text-secondary-green`}>
            <i class={`fad fa-${content.frontmatter.icon}`}></i>
          </div>
          <h1 className={`ct-text-4xl ct-font-bold`}>{ content.frontmatter.title }</h1>
        </div>
        <div className={`ct-text-xl ct-prose`}>
          <div dangerouslySetInnerHTML={{__html: content.html}}></div>
        </div>
        {content.map && (
          <Timeline>
            <Events>
              <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

              <TextEvent 
                date="1/2/19" 
                text="Events alternate by default (given enough space in the browser)" 
              />
            </Events>
          </Timeline>
        )}
      </Block>
    </Layout>
  );
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      icon
      map {
        title
        description
      }
    }
  }
}
`

export default AreaPage;