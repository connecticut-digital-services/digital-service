import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import FocusArea from './_focusArea';

function Areas() {
  return (
    <Block title={false}>
      <h2 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>How We Help or What We Do</h2>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-10`}>The status quo is no longer good enough for our citizens. The Connecticut Digital Service promotes efforts to transform the state’s use of digital technology to deliver high quality experiences for our users.  To do this, our immediate areas of focus include:</div>
      <FocusArea icon={`comments-alt`} title={`Customer Experience`} subtitle={`Deliver services that are designed around the needs of our constituents`} />
      <FocusArea icon={`users`} title={`Talent Modernization`} subtitle={`Attract, develop, support, and retain top digital talent`} />
      <FocusArea icon={`conveyor-belt-alt`} title={`Agile Procurement`} subtitle={`Adopt procurement practices that maximize chances of project success while minimizing cost and risk`} />
      <FocusArea icon={`phone-laptop`} title={`Technology Platforms and Services`} subtitle={`Empower teams to innovate`} />
      <a href="/work" className={`ct-underline ct-text-primary-normal hover:ct-text-primary-dark`}>Learn more about the current projects and initiatives we are working on.</a>
    </Block>
  );
}

export default Areas;
