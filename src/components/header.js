import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import NavLink from './_navLink';
import logo from '../../static/img/logo.png';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="ct-bg-primary-normal ct-py-4">
      <div className="ct-flex ct-flex-col md:ct-flex-row md:ct-items-center ct-px-6">
          <div class="md:ct-w-1/2 ct-mb-4 md:ct-mb-0">
            <img src={logo} alt="Connecticut Digital Service" className={`ct-h-12 sm:ct-h-16`} />
          </div>
          <nav className="ct-flex ct-items-center md:ct-justify-end md:ct-w-1/2">
            <ul className="ct-flex">
              <li><NavLink to={`/`}>Home</NavLink></li>
              <li><NavLink to={`/people`}>Our Team</NavLink></li>
              <li><NavLink to={`/work`}>Our Work</NavLink></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}

export default Header;
