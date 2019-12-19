import React from "react";
import Block from './block';
import TeamMember from './_teamMember';

import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

function Team({ team }) {
  let content = remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(team.body).toString();
  return (
    <Block title={false}>
      <h1 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>{team.title}</h1>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-w-3/4 ct-mb-10`}>{team.intro}</div>
      <div className={`ct-text-xl ct-prose`}>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    </Block>
  );
}

export default Team;
