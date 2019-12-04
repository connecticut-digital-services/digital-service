import React from "react";
import Block from './block';
import TeamMember from './_teamMember';

function Team() {
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>The Team</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-w-3/4 ct-mb-12`}>Our lean but scrappy team is made up of a diverse set of skills and experience. </div>
      <div className={`ct-flex ct-flex-wrap ct--mx-8`}>
        <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
          <TeamMember name="Josh Gabelle" title="Commissioner, Department of Administrative Services" content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
        </div>
        <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
          <TeamMember name="Mark Raymond" title="Chief Information Officer" content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
        </div>
        <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
          <TeamMember name="Easha Canada" title="Chief Digital Officer" content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
        </div>
        <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
          <TeamMember name="John Vittner" title="???" content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
        </div>
        <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
          <TeamMember name="Deb Sengupta" title="???" content="We seek to understand and prioritize the needs of our citizens, businesses and state employees." />
        </div>
      </div>
    </Block>
  );
}

export default Team;
