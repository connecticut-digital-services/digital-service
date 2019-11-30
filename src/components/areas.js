import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Areas() {
  return (
    <Block title="Our Areas of Focus">
        <ol>
            <li>Customer Experience</li>
            <li>Talent Modernization</li>
            <li>Agile Procurement</li>
            <li>Technology Platforms and Services</li>
        </ol>
    </Block>
  );
}

export default Areas;
