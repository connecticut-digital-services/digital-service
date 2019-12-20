import React from "react";
import Block from './block';
import TeamMember from './_teamMember';

function Resources() {
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>Resources</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-12`}>
        <p className={`ct-mb-6`}>Below are resources for state agencies that draw from best practices that we hope will help guide and support digital work that delivers improvements and better experiences for our users.</p>
      </div>
      <div className={`ct-flex ct-flex-wrap`}>
        Resources will go here
      </div>
    </Block>
  );
}

export default Resources;
