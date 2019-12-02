import React, { useState } from "react";
import Block from './block';
import govImage from '../images/govlamont.jpg';

function Quote({ data }) {
  return (
    <Block title={false}>
      <div className={`ct-py-4`}>
        <div className={`ct-text-xl sm:ct-text-2xl ct-mb-6`}>“I will take the lead by investing in the first all-digital government, and reverse engineer every transaction from the taxpayer’s shoes. The entry point to Connecticut will be through its digital front door, a one-stop-shop for everything current and prospective citizens need from their government. We will be online, not in line. It won’t be done overnight, but let’s start today.”</div>
        <div className={`ct-flex ct-items-center`}>
          <div className={`ct-mr-4`}>
            <img src={govImage} alt="Gov. Ned Lamont" className={`ct-w-16`} />
          </div>
          <div className={`ct-leading-tight`}>
            <strong>Governor Lamont</strong>
            <br />
            <em>State of the State Address</em>
          </div>
        </div>
      </div>
    </Block>
  );
}

export default Quote;
