import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";
import Areas from "../components/areas";
import Quote from "../components/quote";
import LineBreak from "../components/_lineBreak";

function WorkPage({data}) {
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
        cta_url="/work"
        button_text={content.hero.button_text}
        bg={content.hero.bg}
        announcements_title={content.hero.announcements_title}
        announcements={content.hero.announcements}
      />
      <Areas
        title={content.focus.header} 
        text={content.focus.text}
        cta={content.focus.cta_text}
        cta_url={content.focus.cta_url}
        areas={areas}
      />
      <LineBreak />
      <Quote
        quote={content.quote.text}
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
