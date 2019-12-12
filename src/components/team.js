import React from "react";
import Block from './block';
import TeamMember from './_teamMember';

function Team({ team }) {
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>{team.title}</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-w-3/4`}>{team.intro}</div>
      <div className={`ct-flex ct-flex-wrap ct--mx-8`}>
        {team.members.map((member, index) => {
          return (
            <div className="ct-w-full sm:ct-w-1/2 ct-px-8">
              <TeamMember name={member.name} title={member.position} content={member.bio} />
            </div>
          )
        })}
      </div>
    </Block>
  );
}

export default Team;
