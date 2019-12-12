import React, { useState } from "react";
import Block from './block';
import govImage from '../../static/img/govlamont.jpg';

function Quote({ quote }) {
  return (
    <div className={`ct-max-w-5xl ct-container ct-mx-auto ct-my-10`}>
      <div className={`ct-bg-primary-lightest md:ct--m-12 ct-p-12`}>
        <div className={`ct-flex`}>
          <div className={`ct-text-primary-normal ct-mr-4 ct-text-2xl`}>
            <i class={`fas fa-quote-left`}></i>
          </div>
          <div>
            <div className={`ct-text-xl sm:ct-text-3xl ct-mb-6 ct-text-primary-dark ct-font-serif `}>{quote}</div>
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
