import React from "react";
import Block from './block';
import CareerOpp from './_careerOpp';

function Careers({ openings }) {
  return (
    <Block title={false}>
<h2 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>{ openings.title }</h2>
  <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-12`}>{ openings.intro }</div>
      <ul>
        {openings.roles.map((role, index) => {
          return (
            <li className={`ct-border-primary-dark ct-border-dotted ct-border-b-2 ct-pb-6 ct-mb-6`}>
              <CareerOpp link={role.link} title={role.position} location={role.location} />
            </li>
          )
        })}
      </ul>
    </Block>
  );
}

export default Careers;
