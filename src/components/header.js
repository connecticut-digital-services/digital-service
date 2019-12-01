import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import NavLink from './_navLink';

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
      <div className="ct-flex ct-items-center ct-px-6">
          <div class="ct-w-1/2">
            <span className="ct-text-white ct-text-2xl ct-py-2">CT Digital Service</span>
          </div>
          <nav className="ct-flex ct-items-center ct-justify-end ct-w-1/2">
            <ul className="ct-flex">
              <li><NavLink to={`/`}>Home</NavLink></li>
              <li><NavLink to={`/people`}>People</NavLink></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}

export default Header;
