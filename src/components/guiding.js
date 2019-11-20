import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Guiding() {
  return (
    <Block title="Our guiding principals">
        <div className="ct-flex ct-flex-wrap ct--mx-8">
            <div className="ct-w-full sm:ct-w-1/2 lg:ct-w-1/3 ct-px-8">
                <Card title="Put users first." content="Identify current users and understand what they’re trying to do. Identify potential users and what would motivate them to access services. Prioritize their needs above all." />
            </div>
            <div className="ct-w-full sm:ct-w-1/2 lg:ct-w-1/3 ct-px-8">
                <Card title="Document. Codify. Share." content="Don’t reinvent the wheel. Document what we learn, develop standards, put them into practice, and share them publicly." />
            </div>
            <div className="ct-w-full sm:ct-w-1/2 lg:ct-w-1/3 ct-px-8">
                <Card title="Create a culture of iteration and collaboration." content="Build capacity in-house to collaborate, experiment, and scale expertise across agencies and subject areas." />
            </div>
            <div className="ct-w-full sm:ct-w-1/2 lg:ct-w-1/3 ct-px-8">
                <Card title="Deliver adaptable, secure, and accessible services." content="To be responsible stewards of the public’s trust and data, adopt modern product delivery processes that adapt to future change. Adhere to best practices to ensure that personal information is secure and services are accessible to all." />
            </div>
            <div className="ct-w-full sm:ct-w-1/2 lg:ct-w-1/3 ct-px-8">
                <Card title="Make decisions based on data and outcomes." content="Measure what’s working before planning what’s next. Plan just enough to test assumptions while building upon what works." />
            </div>
        </div>
    </Block>
  );
}

export default Guiding;
