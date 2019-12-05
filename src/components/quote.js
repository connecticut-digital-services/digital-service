import React, { useState } from "react";
import Block from './block';
import govImage from '../images/govlamont.jpg';

function Quote({ data }) {
  return (
    <div className={`ct-max-w-5xl ct-container ct-mx-auto ct-my-10`}>
      <div className={`ct-bg-primary-lightest md:ct--m-12 ct-p-12`}>
        <div className={`ct-flex`}>
          <div className={`ct-text-primary-normal ct-mr-4 ct-text-2xl`}>
            <i class={`fas fa-quote-left`}></i>
          </div>
          <div>
            <div className={`ct-text-xl sm:ct-text-3xl ct-mb-6 ct-text-primary-dark ct-font-serif `}>I will take the lead by investing in the first all-digital government, and reverse engineer every transaction from the taxpayer’s shoes. The entry point to Connecticut will be through its digital front door, a one-stop-shop for everything current and prospective citizens need from their government. We will be online, not in line. It won’t be done overnight, but let’s start today.</div>
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
        </div>
      </div>
    </div>
  );
}

export default Quote;
