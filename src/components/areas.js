import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Areas() {
  return (
    <Block title="Our Areas of Focus">
        <ol class="ct-list-decimal ct-list-inside">
            <li className="ct-text-primary-dark ct-mb-10 ct-text-3xl">Customer Experience</li>
            <li className="ct-text-primary-dark ct-my-10 ct-text-3xl">Talent Modernization</li>
            <li className="ct-text-primary-dark ct-my-10 ct-text-3xl">Agile Procurement</li>
            <li className="ct-text-primary-dark ct-my-10 ct-text-3xl">Technology Platforms and Services</li>
        </ol>
        <a href="/work" className={`ct-underline ct-text-primary-normal hover:ct-text-primary-dark`}>Learn about our work</a>
    </Block>
  );
}

export default Areas;
