import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import ctLogo from "../../static/img/CT-logo-full.png";

function Footer() {
  return (
    <div className={`ct-bg-primary-dark`}>
      <div className={`ct-max-w-5xl ct-container ct-mx-auto md:ct-py-8 ct-flex ct-items-center`}>
        <span className={`ct-text-white ct-flex-grow`}>&copy; 2019 Connecticut Digital Service</span>
        <span className={'ct-text-right'}>
          <a href="https://ct.gov"><img src={ctLogo} alt={`Connecticut`} className={`ct-h-8`} /></a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
