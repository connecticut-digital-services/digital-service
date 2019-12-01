import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Team from "../components/team";
import Careers from "../components/careers";

function PeoplePage() {
  return (
    <Layout>
      <SEO
        keywords={[`About the team`]}
        title="About the team"
      />
      <Team />
      <Careers />
    </Layout>
  );
}

export default PeoplePage;
