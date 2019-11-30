import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";
import Areas from "../components/areas";
import Contact from "../components/contact";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero text="To better serve the citizens of Connecticut through smart, user-centered digital services." />
      <Guiding></Guiding>
      <Areas></Areas>
      <Contact></Contact>
    </Layout>
  );
}

export default IndexPage;
