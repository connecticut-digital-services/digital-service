import React from "react";
import Block from './block';
import CareerOpp from './_careerOpp';

function Careers() {
  return (
    <Block title={`Careers`}>
      <div>Our lean but scrappy team is made up of a diverse set of skills and experience. </div>
      <ul>
        <li>
          <CareerOpp link={`https://www.jobapscloud.com/CT/sup/bulpreview.asp?R1=190821&R2=0415VR&R3=001`} title={`Digital User Experience Design Manager`} location={`Hartford, CT`} />
        </li>
        <li>
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
