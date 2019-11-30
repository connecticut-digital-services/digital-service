import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Block from './block';
import Card from './card';

function Contact() {
  return (
    <Block title="Contact">
        <p>Here is some contact text.</p>
        <a href="mailto:test@example.com">Email</a>
    </Block>
  );
}

export default Contact;
