import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import chevron from '../../static/img/chevron.svg'

function Contact() {
  return (
    <div className={`ct-bg-grey-light`}>
      <div className={`ct-max-w-5xl ct-container ct-mx-auto ct-py-8`}>
        <div className={`ct-flex ct-flex-col md:ct-flex-row ct-items-center`}>
          <span className={`ct-flex-grow ct-text-2xl ct-text-primary-dark ct-mb-6 md:ct-mb-0`}>Do you have a project need? Interested in joining the digital team? Have a big idea? Drop us a line!</span>
          <span className={`md:ct-ml-6`}>
            <a href={`mailto:HelloCTDigital@ct.gov`} className={`ct-inline-flex ct-bg-primary-normal hover:ct-bg-primary-dark ct-text-white`}>
              <span className={`ct-px-6 ct-py-4 ct-font-bold ct-w-48`}>Contact Us</span>
              <span className={`ct-flex ct-items-center ct-justify-center ct-bg-primary-dark ct-w-16`}>
                <img src={chevron} role={`presentation`} className={`ct-w-6`} />
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
