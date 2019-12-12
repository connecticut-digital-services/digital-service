import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Team from "../components/team";
import Careers from "../components/careers";
import LineBreak from "../components/_lineBreak";

function PeoplePage({data}) {

  return (
    <Layout>
      <SEO
        keywords={[`About the team`]}
        title="About the team"
      />
      <Team team={data.markdownRemark.frontmatter.team} />
      <LineBreak />
      <Careers openings={data.markdownRemark.frontmatter.openings} />
    </Layout>
  );
}


export const pageQuery = graphql`
query PeopleTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "people" } }) {
    html
    frontmatter {
    	team {
        title
        intro
        members {
          name
          position
          bio
        }
      }
      openings {
        title
        intro
        roles {
          link
          location
          position
        }
      }
    }
  }
}
`

export default PeoplePage;
