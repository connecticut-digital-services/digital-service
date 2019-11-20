import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

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
      <div className="ct-container ct-mx-auto">
          <span className="ct-text-white ct-text-2xl ct-py-2">CT Digital Service</span>
      </div>
    </header>
  );
}

export default Header;
