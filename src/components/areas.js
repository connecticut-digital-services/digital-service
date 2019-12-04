import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import FocusArea from './_focusArea';

function Areas() {
  return (
    <Block title="Our Areas of Focus">
      <FocusArea icon={`comments-alt`} title={`Customer Experience`} subtitle={`Deliver services that are designed around the needs of our constituents`} />
      <FocusArea icon={`users`} title={`Talent Modernization`} subtitle={`Attract, develop, support, and retain top digital talent`} />
      <FocusArea icon={`conveyor-belt-alt`} title={`Agile Procurement`} subtitle={`Adopt procurement practices that maximize chances of project success while minimizing cost and risk`} />
      <FocusArea icon={`phone-laptop`} title={`Technology Platforms and Services`} subtitle={`Empower teams to innovate`} />
      <a href="/work" className={`ct-underline ct-text-primary-normal hover:ct-text-primary-dark`}>Learn about our work</a>
    </Block>
  );
}

export default Areas;
