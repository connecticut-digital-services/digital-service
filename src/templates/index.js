import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";
import Areas from "../components/areas";
import Quote from "../components/quote";
import LineBreak from "../components/_lineBreak";

function IndexPage({data}) {
  const content = data.markdownRemark.frontmatter;
  const areas = data.areas.edges;
  const principles = data.principles.edges;

  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]}
        title="Connecticut Digital Service"
      />
      <Hero
        text={content.hero.text} 
        cta={content.hero.cta_text}
        cta_url="/people"
        button_text={content.hero.button_text}
        bg={content.hero.bg}
        announcements_title={content.hero.announcements_title}
        announcements={content.hero.announcements}
      />
      <Quote
        quote={content.quote.text}
        title={content.quote.title}
      />
      <Areas
        title={content.focus.header} 
        text={content.focus.text}
        cta={content.focus.cta_text}
        cta_url={content.focus.cta_url}
        areas={areas}
      />
      <LineBreak />
      <Guiding
        heading={content.principles.text}
        principles={principles}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
query IndexTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
    html
    frontmatter {
      hero {
        text
        cta_text
        button_text
        bg {
          childImageSharp {
            fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        announcements_title
        announcements {
          title
          description
          cta_text
          cta_link
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      focus {
        header
        text
        cta_text
        cta_url
      }
      quote {
        text
        title
      }
      principles {
        text
      }
    }
  }
  principles: allMarkdownRemark(
    filter: {
      frontmatter: {
        templateKey: { 
          eq: "principle"
        }
      }
    },
    sort: {
      fields: frontmatter___order,
      order: ASC
    }) {
    edges {
      node {
        frontmatter {
          title
          icon
          description
        }
      }
    }
  }
  areas: allMarkdownRemark(
    filter: {
      frontmatter: {
        templateKey: { 
          eq: "area"
        }
      }
    },
    sort: {
      fields: frontmatter___order,
      order: ASC
    }) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          icon
          description
        }
      }
    }
  }
}
`

export default IndexPage;
