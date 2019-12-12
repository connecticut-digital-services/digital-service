import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";
import LineBreak from "../components/_lineBreak";

function WorkPage({data}) {
  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]}
        title="Connecticut Digital Service"
      />
      <Work data={data.markdownRemark.frontmatter.projects} list={data.projects} />
      <LineBreak />
      <Work data={data.markdownRemark.frontmatter.resources} />
    </Layout>
  );
}

export const pageQuery = graphql`
query WorkPage {
  markdownRemark(frontmatter: { templateKey: { eq: "project" } }) {
    frontmatter {
      projects {
        header
        text
      }
      resources {
        header
        text
        projects {
          title
          description
          cta_text
          cta_link
        }
      }
    }
  }
  projects: allMarkdownRemark(
    filter: {
      frontmatter: {
        templateKey: { 
          eq: "work"
        }
      }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          excerpt
          image {
            childImageSharp {
              fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
              }
            }
          }
          date
        }
      }
    }
  }
}
`

export default WorkPage;
