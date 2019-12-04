import React from "react";
import Block from './block';
import CareerOpp from './_careerOpp';

function Careers() {
  return (
    <Block title={false}>
      <h2 className={`ct-text-3xl md:ct-text-4xl ct-font-bold ct-text-primary-dark`}>Open Roles</h2>
      <div className={`ct-text-xl md:ct-text-2xl ct-text-primary-dark ct-mb-12`}>Interested in harnessing your tech superpowers to transform the digital experience of the citizens of Connecticut? Check out the open roles on our team below. We look forward to hearing from you! </div>
      <ul>
        <li className={`ct-border-primary-dark ct-border-dotted ct-border-b-2 ct-pb-6 ct-mb-6`}>
          <CareerOpp link={`https://www.jobapscloud.com/CT/sup/bulpreview.asp?R1=190821&R2=0415VR&R3=001`} title={`Digital User Experience Design Manager`} location={`Hartford, CT`} />
        </li>
        <li className={`ct-border-primary-dark ct-border-dotted ct-border-b-2 ct-pb-6 ct-mb-6`}>
          <CareerOpp link={`https://www.jobapscloud.com/CT/sup/bulpreview.asp?R1=190820&R2=0415VR&R3=001`} title={`Digital Product Manager`} location={`Hartford, CT`} />
        </li>
        <li>
          <CareerOpp link={`https://www.jobapscloud.com/CT/sup/bulpreview.asp?R1=190822&R2=0415VR&R3=001`} title={`Software Engineering Manager`} location={`Hartford, CT`} />
        </li>
      </ul>
    </Block>
  );
}

export default Careers;
