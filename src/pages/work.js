import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";
import Resources from "../components/resources";
import LineBreak from "../components/_lineBreak";

function PeoplePage() {
  return (
    <Layout>
      <SEO
        keywords={[`About the team`]}
        title="About the team"
      />
      <Work />
      <LineBreak />
      <Resources />
    </Layout>
  );
}

export default PeoplePage;
