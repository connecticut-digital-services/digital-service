import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";
import Areas from "../components/areas";
import Quote from "../components/quote";
import LineBreak from "../components/_lineBreak";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]}
        title="Connecticut Digital Service"
      />
      <Hero 
        title="Our Mission" 
        text="We better serve the citizens of Connecticut through smart, user-centered digital services." 
        cta="Learn more about our work"
        cta_url="/work"
      />
      <Areas></Areas>
      <LineBreak />
      <Quote></Quote>
      <LineBreak />
      <Guiding></Guiding>
    </Layout>
  );
}

export default IndexPage;
