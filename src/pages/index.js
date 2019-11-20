import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Guiding from "../components/guiding";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero text="We envision a government that delivers cost-effective public services through a seamless digital experience and exceptional customer service." />
      <Guiding></Guiding>
    </Layout>
  );
}

export default IndexPage;
