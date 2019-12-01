import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";
import Areas from "../components/areas";
import Contact from "../components/contact";
import Quote from "../components/quote";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]}
        title="Connecticut Digital Service"
      />
      <Hero text="To better serve the citizens of Connecticut through smart, user-centered digital services." />
      <Quote></Quote>
      <Guiding></Guiding>
      <Areas></Areas>
      <Contact></Contact>
    </Layout>
  );
}

export default IndexPage;
