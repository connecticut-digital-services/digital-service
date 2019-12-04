import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Team from "../components/team";
import Careers from "../components/careers";
import LineBreak from "../components/_lineBreak";

function PeoplePage() {
  return (
    <Layout>
      <SEO
        keywords={[`About the team`]}
        title="About the team"
      />
      <Team />
      <LineBreak />
      <Careers />
    </Layout>
  );
}

export default PeoplePage;
