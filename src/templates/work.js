import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Block from '../components/block';

function WorkPage({data, html}) {
  const content = data.markdownRemark;

  console.log(data)

  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]} 
        title="Connecticut Digital Service"
      />
      <Block>
        <a href="/work">Our Work</a>
        <h1 className={`ct-text-4xl ct-font-bold`}>{ content.frontmatter.title }</h1>
        <div className={`ct-mb-10`}>Posted { content.frontmatter.date }</div>
        <div dangerouslySetInnerHTML={{__html: content.html}}></div>
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
      date
    }
  }
}
`

export default WorkPage;
