import React from "react";
import Block from './block';
import TeamMember from './_teamMember';

function Work() {
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>Our Work</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-12`}>
        <p className={`ct-mb-6`}>Connecticut Digital Services serves as a primary hub and resource for digital transformation in the state. We are always engaged in a number of digital projects and initiatives to support the needs of state agencies and our constituents.</p>
        <p><strong>Here are a few examples of our work</strong></p>
      </div>
      <div className={`ct-flex ct-flex-wrap`}>
        Work will go here
      </div>
    </Block>
  );
}

export default Work;
