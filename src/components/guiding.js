import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Guiding() {
  return (
    <Block id={`guiding`} className={`lg:ct--mx-8`} title="Our guiding principles">
        <div className="ct-flex ct-flex-wrap ct--mx-2">
            <Card icon={`user-circle`} title="Listen to our users." content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
            <Card icon={`universal-access`} title="Ensure services are accessible to all." content="As stewards of the public’s trust and data, we follow best practices that ensure personal information is safe and services are accessible to everyone." />
            <Card icon={`seedling`} title="Grow a culture of collaboration." content="We work across agencies so that together, we can deliver results that put our citizens first." />
            <Card icon={`megaphone`} title="Move swiftly, and share what we learn." content="We won’t reinvent the wheel. We improve services by building on what works and developing standards that can be put into practice across the state." />
        </div>
    </Block>
  );
}

export default Guiding;
