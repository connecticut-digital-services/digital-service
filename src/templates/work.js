import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";

function WorkPage({data}) {
  const content = data.markdownRemark;

  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]}
        title="Connecticut Digital Service"
      />
      {html}
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
