import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Guiding() {
  return (
    <Block id={`guiding`} className={`lg:ct--mx-8`} title="Our guiding principals">
        <div className="ct-flex ct-flex-wrap ct--mx-2">
            <Card title="Listen to our users." content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
            <Card title="Ensure safe and accessible services." content="As stewards of the public’s trust and data, we ensure personal information is secure and services are accessible to all." />
            <Card title="Grow a culture of collaboration." content="We work across agencies so that together, we can deliver results that put our citizens first." />
            <Card title="Move swiftly, and share what we learn." content="We improve services by building on what works and developing standards that can be put into practice across the state." />
        </div>
    </Block>
  );
}

export default Guiding;
